export class Surname {
    private _surname: string;

    constructor(surname: string) {
        this.ensureSurnameIsNotUndefined(surname);

        this._surname = surname;
    }

    get surname(): string {
        return this._surname;
    }

    private ensureSurnameIsNotUndefined(name: string): void {
        if (!name)
            throw new Error("Surname is required");
    }
}
