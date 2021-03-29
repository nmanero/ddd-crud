import {Repository} from "../repository.interface";
import {Domain} from "../../../domains/domain";
import {Hashmap} from "../../../DTO/hashmap";

export class LocalArrayRepository implements Repository {
    private entityName: string;

    constructor(entityName: string) {
        this.entityName = entityName;
    }

    async getAll(): Promise<Domain[]> {
        //TODO: map with mapper from Hashmap to Domain
        return LocalArrayData.getInstance().getCollection(this.entityName).map(i => i as Domain);
    }

    async add(item: Domain): Promise<Domain> {
        LocalArrayData.getInstance().getCollection(this.entityName).push(item.toDTO());
        return item;
    }
}

class LocalArrayData {
    private static instance: LocalArrayData;
    private items: { [key: string]: Hashmap[] } = {};

    private constructor() {
    }

    public static getInstance(): LocalArrayData {
        if (!LocalArrayData.instance) {
            LocalArrayData.instance = new LocalArrayData();
        }

        return LocalArrayData.instance;
    }

    getCollection(name: string): Hashmap[] {
        if (!this.items[name]) {
            this.items[name] = []
        }
        return this.items[name];
    }
}