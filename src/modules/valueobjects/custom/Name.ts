export class Name {
    private _name: string;

    constructor(name: string) {
        this.ensureNameIsNotUndefined(name);

        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    private ensureNameIsNotUndefined(name: string): void {
        if (!name)
            throw new Error("Name is required");
    }
}
