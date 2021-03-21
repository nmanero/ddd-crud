import {Hashmap} from "../DTO/hashmap";
import {Repository} from "../infraestructure/repositories/repository.interface";
import {Domain} from "../domains/domain";

export class Service {
    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    getAll() {
        return this.repository.getAll();
    }

    add(d: Domain) {
        this.repository.add(d);
    }
}