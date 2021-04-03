export class UUID {
    private readonly _value: string;

    public constructor(value: string) {
        this.assertValidUUID(value);

        this._value = value;
    }

    public get value(): string {
        return this._value;
    }

    private assertValidUUID(uuid: string): void {
        if(!uuid) {
            throw new Error("Error: uuid is required");
        }
        else {
            if (uuid.length != 36) {
                throw new Error("Error: uuid should be 36 chars length");
            }
            else {
                let re = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
                if (!uuid.match(re)) {
                    throw new Error("Error: uuid should match with regular expression [0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}");
                }
            }
        }
    }
}
