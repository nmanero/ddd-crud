import {Repository} from "../repository.interface";
import {Domain} from "../../../domains/domain";
import {Hashmap} from "../../../DTO/hashmap";
import {UUID} from "../../../DTO/value-object/uuid";

export class LocalDictRepository implements Repository {
    private readonly entityName: string;

    constructor(entityName: string) {
        this.entityName = entityName;
    }

    async getById(id: UUID): Promise<Domain> {
        return LocalDictData.getInstance().getCollection(this.entityName)[id.value] as Domain;
    }

    async getAll(): Promise<Domain[]> {
        return Object.values(LocalDictData.getInstance().getCollection(this.entityName)).map(i => i as Domain);
    }

    async add(item: Domain): Promise<Domain> {
        let collection = LocalDictData.getInstance().getCollection(this.entityName);
        if (collection[String(item.whoAmI())] !== undefined) {
            throw new Error("Unique Error: an item with same identity exists.")
        }
        else {
            collection[String(item.whoAmI())] = item.toDTO();
            return item;
        }
    }

    async delete(item: Domain): Promise<boolean> {
        let collection = LocalDictData.getInstance().getCollection(this.entityName);
        if (collection[String(item.whoAmI())] !== undefined) {
            delete collection[String(item.whoAmI())];
        }
        else {
            return false;
        }
    }

    async update(item: Domain): Promise<Domain> {
        let collection = LocalDictData.getInstance().getCollection(this.entityName);
        if (collection[String(item.whoAmI())] !== undefined) {
            collection[String(item.whoAmI())] = item.toDTO();
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