import {Hashmap} from "../DTO/hashmap";
import {Domain} from "../domains/domain";

export class GenericMapper {

    public static toHashmap(domainModel: Domain): Hashmap {
        const objectDTO: Hashmap = {};

        const domainProperties = this.getClassPropertyIdentifiers(domainModel);

        domainProperties.forEach(property => {
            this.ensureDomainHasGetterForProperty(domainModel, property);
            objectDTO[property] = domainModel[property];
        });

        return objectDTO;
    }

    private static getClassPropertyIdentifiers(domainModel: Domain): Array<string> {
        return Object
                .getOwnPropertyNames(domainModel)
                .map(property => (property.replace('_', '')) );
    }

    private static ensureDomainHasGetterForProperty(domainModel: Domain, property: string): void {
        if (domainModel[property] === undefined)
            throw new Error(`GenericMapper: domain should implement getter to ${property}`);
    }
}

