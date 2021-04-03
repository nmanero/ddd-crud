import {Repository} from "../repository.interface";
import {Domain} from "../../../domains/domain";
import {Hashmap} from "../../../DTO/hashmap";
import {CustomDomainFactory} from "../../../domains/custom/custom.domain.factory";

export class LocalArrayRepository implements Repository {
    private entityName: string;

    constructor(entityName: string) {
        this.entityName = entityName;
    }

    async get(item: Domain) {
        let entityName = this.entityName;
        return LocalArrayData.getInstance().getCollection(entityName).find(function (value, index, arr) {
            //TODO: map with mapper from Hashmap to Domain
            const domainObjectsFactory = new CustomDomainFactory(entityName, value);
            return domainObjectsFactory.instantiate().whoAmI() == item.whoAmI();
        });
    }

    async getAll(): Promise<Domain[]> {
        //TODO: map with mapper from Hashmap to Domain
        return LocalArrayData.getInstance().getCollection(this.entityName).map(i => i as Domain);
    }

    async add(item: Domain): Promise<Domain> {
        if (await this.get(item)) {
            throw new Error("Unique Error: an item with same identity exists.")
        }
        else {
            LocalArrayData.getInstance().getCollection(this.entityName).push(item.toDTO());
            return item;
        }
    }

    async delete(id: string): Promise<boolean> {
        let entityName = this.entityName;
        LocalArrayData.getInstance().setCollection(entityName, LocalArrayData.getInstance().getCollection(entityName).filter(function(value, index, arr){
            //TODO: map with mapper from Hashmap to Domain
            const domainObjectsFactory = new CustomDomainFactory(entityName, value);
            return domainObjectsFactory.instantiate().whoAmI() != encodeURI(id);
        }));
        return true;
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

    setCollection(name: string, items: Hashmap[]) {
        this.items[name] = items;
    }

    getCollection(name: string): Hashmap[] {
        if (!this.items[name]) {
            this.setCollection(name, [])
        }
        return this.items[name];
    }
}