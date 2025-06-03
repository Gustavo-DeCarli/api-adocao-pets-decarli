const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PublicModel = require("../models/publicModel");

class PublicService {
    static async registerUser(user) {
        const { email, password, role } = user;
        const existing = await PublicModel.findByEmail(email);
        if (existing) {
            throw new Error("Usuário já existe");
        }
        const hashed = await bcrypt.hash(password, 10);
        user.password = hashed;
        const id = await PublicModel.create(user);
        return { message: "Usuário registrado com sucesso", id };
    }

    static async loginUser({ email, password }) {
        const user = await PublicModel.findByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error("Senha inválida");
        }
        const token = jwt.sign(
            { email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        return { token };
    }

    static async petsAvailable() {
        const animals = await PublicModel.findAnimals();
        if (!animals) {
            throw new Error("Nenhum animal para adoção foi encontrado!");
        }
        return { animals };
    }
}

module.exports = PublicService;
