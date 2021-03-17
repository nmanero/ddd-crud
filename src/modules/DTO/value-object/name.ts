export class Name {
    private readonly _name: string;

    public constructor(name: string) {
        this.ensureNameIsNotUndefined(name);

        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    private ensureNameIsNotUndefined(name: string): void {
        if(!name)
            throw new Error("Error: name is required");
    }
}
