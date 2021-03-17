export class Surname {
    private readonly _surname: string;

    public constructor(surname: string) {
        this.ensureSurnameIsNotUndefined(surname);

        this._surname = surname;
    }

    public get surname(): string {
        return this._surname;
    }

    private ensureSurnameIsNotUndefined(surname: string): void {
        if(!surname)
            throw new Error("Error: surname is required");
    }
}
