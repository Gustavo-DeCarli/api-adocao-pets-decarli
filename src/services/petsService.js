const PetsModel = require("../models/petsModel");

class PublicService {

    static async petsAvailable() {
        const animals = await PetsModel.findAnimals();
        if (!animals) {
            throw new Error("Nenhum animal para adoção foi encontrado!");
        }
        return { animals };
    }

    static async listAllPets() {
        const animals = await PetsModel.getAllAnimals();
        if (!animals) {
            throw new Error("Nenhum animal encontrado!");
        }
        return { animals };
    }

    static async findPetById(id) {
        const animal = await PetsModel.findPetById(id);
        if (!animal) {
            throw new Error("Pet não encontrado");
        }
        return { animal };
    }

    static async addPet(pet) {
        const { size } = pet;
        if (!['small', 'medium', 'large'].includes(size)) {
            throw new Error("Size incorreto!");
        }
        const animal = await PetsModel.addPet(pet);
        if (!animal) {
            throw new Error("Erro ao adicionar pet!");
        }
        return { animal };
    }

    static async updatePet(pet) {
        const { id } = pet;
        const existing = await PetsModel.findPetById(id);
        if (!existing) {
            throw new Error("Pet não existe");
        }
        const petSuccess = PetsModel.updatePet(pet);
        if (!petSuccess) {
            throw new Error("Erro ao atualizar pet, verifique as informações!");
        }
        return { petSuccess };
    }

    static async deletePet(pet) {
        const { id } = pet;
        const existing = await PetsModel.findPetById(id);
        if (!existing) {
            throw new Error("Pet não existe");
        }
        const petSuccess = PetsModel.deletePet(id);
        if (!petSuccess) {
            throw new Error("Erro ao deletar pet, verifique as informações!");
        }
        return { petSuccess };
    }

}

module.exports = PublicService;
