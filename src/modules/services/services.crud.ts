import {Repository} from "../infraestructure/repositories/repository.interface";
import {Domain} from "../domains/domain";
import {UUID} from "../DTO/value-object/uuid";

export class Service {
    private readonly repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    getById(id: UUID) {
        return this.repository.getById(id);
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