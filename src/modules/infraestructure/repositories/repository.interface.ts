import {Domain} from "../../domains/domain";

export interface Repository {
    getAll(): Promise<Domain[]>;

    add(item: Domain): Promise<Domain>;

    delete(item: Domain): Promise<boolean>;

    update(item: Domain): Promise<Domain>;
}