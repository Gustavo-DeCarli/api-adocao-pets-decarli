const PetsService = require("../services/petsService");
const UserService = require("../services/userService");

class PublicController {
    static async register(req, res) {
        try {
            const result = await UserService.registerUser(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(409).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const result = await UserService.loginUser(req.body);
            return res.status(200).json(result);
        } catch (error) {
            const status =
                error.message === "Usuário não encontrado" ||
                error.message === "Senha inválida"
                    ? 401
                    : 500;
            return res.status(status).json({ message: error.message });
        }
    }

    static async petsAvailable(req, res) {
        try {
            const result = await PetsService.petsAvailable(req.body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PublicController;
