const AdoptionsModel = require("../models/adoptionsModel");
const PetsModel = require("../models/petsModel");
const UserModel = require("../models/userModel");

class AdoptionsService {

    static async listAdoptions() {
        const adoptions = await AdoptionsModel.listAdoptions();
        if (!adoptions) {
            throw new Error("Nenhuma adoção foi encontrada!");
        }
        return { adoptions };
    }

    static async addAdoption(adoption) {
        const { user_id, pet_id } = adoption;
        const userExisting = await UserModel.findUserById(user_id);
        const PetExisting = await PetsModel.findPetById(pet_id);
        if (userExisting) {
            throw new Error("Usuário não existe");
        }
        if (PetExisting) {
            throw new Error("Pet não existe");
        }
        if(PetExisting.status == 'adopted') {
            throw new Error("Pet já adotado");
        }
        const id = await AdoptionsModel.addAdoption(adoption);
        await PetsModel.updatePetStatusAdopted(pet_id)
        return { message: "Adoção registrada com sucesso", id };
    }

}

module.exports = AdoptionsService;
