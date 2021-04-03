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

    delete(id: string) {
        this.repository.delete(id)
    }
}