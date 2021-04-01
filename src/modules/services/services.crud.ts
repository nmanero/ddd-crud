import {Repository} from "../infraestructure/repositories/repository.interface";
import {Domain} from "../domains/domain";

export class Service {
    private readonly repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    getAll() {
        return this.repository.getAll();
    }

    add(d: Domain) {
        this.repository.add(d);
    }

    delete(d: Domain) {
        this.repository.delete(d)
    }

    update(d: Domain) {
        this.repository.update(d)
    }
}