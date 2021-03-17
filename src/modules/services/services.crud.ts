import {Hashmap} from "../DTO/hashmap";

export const createService = async (hashmap: Hashmap) => {
    const fakeRepository = {
        "persist": function(hashmap: Hashmap) {
            console.log("Persisting domain object", hashmap);
        }
    };

    fakeRepository.persist(hashmap);
};
