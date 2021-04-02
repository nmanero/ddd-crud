export class Address {
    private readonly _country: string;
    private readonly _city: string;
    private readonly _zipcode: string;
    private readonly _street: string;

    public constructor(country: string, city: string, zipcode: string, street: string) {
        this.assertThatZipcodeIsValid(zipcode);

        this._country = country;
        this._city = city;
        this._zipcode = zipcode;
        this._street = street;
    }

    public get country(): string {
        return this._country;
    }

    public get city(): string {
        return this._city;
    }

    public get zipcode(): string {
        return this._zipcode;
    }

    public get street(): string {
        return this._street;
    }

    private assertThatZipcodeIsValid(zipcode: string): void {
        if (zipcode === undefined || zipcode === null || zipcode.length <= 2 || zipcode.length > 100) {
            throw new Error('Zipcode must be greater than 2 chars and less than 10.')
        }
    }
}
