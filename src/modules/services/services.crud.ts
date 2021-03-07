import { Domain } from "../domains/domain.interface";

export const postService = async (domain: Domain) => {
    const fakeRepository = {
        "persist": function(d: Domain) {
            console.log("Persisting domain object");
        }
    };

    fakeRepository.persist(domain);
};