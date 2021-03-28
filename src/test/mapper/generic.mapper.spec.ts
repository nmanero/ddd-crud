import {User} from "../../modules/domains/custom/user/user.domain";
import {Name} from "../../modules/DTO/value-object/name";
import {Surname} from "../../modules/DTO/value-object/surname";
import {Hashmap} from "../../modules/DTO/hashmap";
import {GenericMapper} from "../../modules/mapper/generic.mapper";
import {ComplexDomain} from "./complex.domain";
import {InvalidDomain} from "./invalid.domain";

describe("GenericMapper test", () => {

   it("Should return hashmap with user domain properties", () => {
      const user: User = new User(
          new Name("Satoshi"),
          new Surname("Nakamoto")
      );

      const userDTO: Hashmap = GenericMapper.toHashmap(user);
      expect(userDTO).toStrictEqual({
         name: "Satoshi",
         surname: "Nakamoto"
      })
   });

   it("Should throw error when property has not getter method", () => {
      const invalidDomain: InvalidDomain = new InvalidDomain();
      const getInvalidDTO = () => {
         GenericMapper.toHashmap(invalidDomain)
      };
      expect(getInvalidDTO).toThrowError(Error);
   });

   it("Should return hashmap with complex domain properties", () => {
      const complexDomain: ComplexDomain = new ComplexDomain();
      const complexDTO = GenericMapper.toHashmap(complexDomain);
      expect(complexDTO).toStrictEqual({
         name: "Gandalf",
         booleanProperty: true,
         stringArray : [
            "Aragon",
            "Legolas",
            "Gimli"
         ],
         mixArray: [
            true,
            false,
            "str",
            [
               "frodo",
               "sam"
            ]
         ]
      });
   });
});
