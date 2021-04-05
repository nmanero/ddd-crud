import {Repository} from "../repository.interface";
import {Domain} from "../../../domains/domain";
import {Hashmap} from "../../../DTO/hashmap";
import {UUID} from "../../../DTO/value-object/uuid";

export class LocalDictRepository implements Repository {
    private readonly entityName: string;

    constructor(entityName: string) {
        this.entityName = entityName;
    }

    async getById(id: UUID) {
        return LocalDictData.getInstance().getCollection(this.entityName)[id.value];
    }

    async getAll(): Promise<Domain[]> {
        return Object.values(LocalDictData.getInstance().getCollection(this.entityName)).map(i => i as Domain);
    }

    async add(item: Domain): Promise<Domain> {
        let id: UUID = new UUID(String(item.whoAmI()));
        if (await this.getById(id)) {
            throw new Error("Unique Error: an item with same identity exists.")
        }
        else {
            LocalDictData.getInstance().getCollection(this.entityName)[id.value] = item.toDTO();
            return item;
        }
    }

    async delete(item: Domain): Promise<boolean> {
        let id: UUID = new UUID(String(item.whoAmI()));
        if (await this.getById(id)) {
            delete LocalDictData.getInstance().getCollection(this.entityName)[id.value];
        }
        else {
            return false;
        }
    }

    async update(item: Domain): Promise<Domain> {
        let id: UUID = new UUID(String(item.whoAmI()));
        if (await this.getById(id)) {
            LocalDictData.getInstance().getCollection(this.entityName)[id.value] = item.toDTO();
        }
        else {
            return {} as Domain;
        }
    }
}

class LocalDictData {
    private static instance: LocalDictData;
    private items: { [key: string]: { [id: string]: Hashmap } } = {};

    private constructor() {
    }

    public static getInstance(): LocalDictData {
        if (!LocalDictData.instance) {
            LocalDictData.instance = new LocalDictData();
        }

        return LocalDictData.instance;
    }

    setCollection(name: string, items: {}) {
        this.items[name] = items;
    }

    getCollection(name: string): { [key: string]: Hashmap } {
        if (!this.items[name]) {
            this.setCollection(name, {})
        }
        return this.items[name];
    }
}