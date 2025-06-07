const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

class UserService {
    static async registerUser(user) {
        const { email, password } = user;
        const existing = await UserModel.findByEmail(email);
        if (existing) {
            throw new Error("Usuário já existe");
        }
        const hashed = await bcrypt.hash(password, 10);
        user.password = hashed;
        const id = await UserModel.create(user);
        return { message: "Usuário registrado com sucesso", id };
    }

    static async loginUser({ email, password }) {
        const user = await UserModel.findByEmail(email);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error("Senha inválida");
        }
        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        return { token };
    }

    static async listUsers() {
        const users = await UserModel.listUsers();
        if (!users) {
            throw new Error("Nenhum usuário encontrado");
        }
        return { users };
    }

    static async findUserById({ id }) {
        const user = await UserModel.findUserById(id);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return { user };
    }

    static async updateUser(user, id) {
        user.id = id;
        const { password } = user;
        const existing = await UserModel.findUserById(id);
        if (!existing) {
            throw new Error("Usuário não existe");
        }
        const hashed = await bcrypt.hash(password, 10);
        user.password = hashed;
        const userSuccess = await UserModel.updateUser(user);
        if (!userSuccess) {
            throw new Error("Erro ao atualizar usuário, verifique as informações!");
        }
        return { userSuccess };
    }

    static async deleteUser({ id }) {
        const existing = await UserModel.findUserById(id);
        if (!existing) {
            throw new Error("Usuário não existe");
        }
        const userSuccess = await UserModel.deleteUser(id);
        if (!userSuccess) {
            throw new Error("Erro ao deletar usuário, verifique as informações!");
        }
        return { userSuccess };
    }
}

module.exports = UserService;
