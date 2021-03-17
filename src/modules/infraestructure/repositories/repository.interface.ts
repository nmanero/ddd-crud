import {Domain} from "../../domains/domain";

export interface Repository {
    findAll(): Promise<Domain[]>;

    save(item: Domain): Promise<Domain>;
}