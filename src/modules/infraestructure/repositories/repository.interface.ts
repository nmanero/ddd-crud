import {Domain} from "../../domains/domain";
import {UUID} from "../../DTO/value-object/uuid";

export interface Repository {
    getById(id: UUID): Promise<Domain>;

    getAll(): Promise<Domain[]>;

    add(item: Domain): Promise<Domain>;

    delete(item: Domain): Promise<boolean>;

    update(item: Domain): Promise<Domain>;
}