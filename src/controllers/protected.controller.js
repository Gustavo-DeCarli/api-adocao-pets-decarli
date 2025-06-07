const UserService = require("../services/userService");
const PetsService = require("../services/petsService");
const AdoptionsService = require("../services/adoptionsService");

class ProtectedController {
    static async listUsers(req, res) {
        try {
            const result = await UserService.listUsers();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async findUser(req, res) {
        try {
            const result = await UserService.findUserById(req.params);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async updateUser(req, res) {
        try {
            const result = await UserService.updateUser(req.body, req.params.id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async deleteUser(req, res) {
        try {
            const result = await UserService.deleteUser(req.params);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async listPets(req, res) {
        try {
            const result = await PetsService.listAllPets();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async findPet(req, res) {
        try {
            const result = await PetsService.findPetById(req.params);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async addPet(req, res) {
        try {
            const result = await PetsService.addPet(req.body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async updatePet(req, res) {
        try {
            const result = await PetsService.updatePet(req.body, req.params.id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async deletePet(req, res) {
        try {
            const result = await PetsService.deletePet(req.params);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async listAdoptions(req, res) {
        try {
            const result = await AdoptionsService.listAdoptions();
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static async addAdoption(req, res) {
        try {
            const result = await AdoptionsService.addAdoption(req.body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }
}

module.exports = ProtectedController;
