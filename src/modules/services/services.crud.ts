import {Hashmap} from "../DTO/hashmap";
import {Repository} from "../infraestructure/repositories/repository.interface";
import {Domain} from "../domains/domain";

export class Service {
    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    get() {
        return this.repository.findAll();
    }

    create(d: Domain) {
        this.repository.save(d);
    }
}