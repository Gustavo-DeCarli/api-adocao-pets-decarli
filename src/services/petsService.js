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
        return { message: "Usuário registrado com sucesso", animal };
    }

    static async updatePet(pet, id) {
        const existing = await PetsModel.findPetById(id);
        if (!existing) {
            throw new Error("Pet não existe");
        }
        pet.id = id;
        const petSuccess = await PetsModel.updatePet(pet);
        if (!petSuccess) {
            throw new Error("Erro ao atualizar pet, verifique as informações!");
        }
        return { message: "Pet registrado com sucesso" };
    }

    static async deletePet({id}) {
        const existing = await PetsModel.findPetById(id);
        if (!existing) {
            throw new Error("Pet não existe");
        }
        if(existing.status == 'adopted') {
            throw new Error("Pet já adotado não pode ser removido");
        }
        const petSuccess = await PetsModel.deletePet(id);
        if (!petSuccess) {
            throw new Error("Erro ao deletar pet, verifique as informações!");
        }
        return { message: "Pet deletado com sucesso" };
    }

}

module.exports = PublicService;
