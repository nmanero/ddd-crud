import {Domain} from "../../domains/domain";

export interface Repository {
    getAll(): Promise<Domain[]>;

    add(item: Domain): Promise<Domain>;
}