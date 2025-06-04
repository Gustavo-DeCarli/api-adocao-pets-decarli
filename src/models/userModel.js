const db = require("../config/database");
class UserModel {
    static async findByEmail(email) {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
            email,
        ]);
        return rows[0];
    }

    static async create(user) {
        const { name, email, password, phone, role } = user;
        const [result] = await db.query(
            "INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)",
            [name, email, password, phone, role]
        );
        return result.insertId;
    }

    static async listUsers() {
        const [rows] = await db.query(
            "SELECT * FROM users;"
        );
        return rows;
    }

    static async findUserById(id) {
        const [rows] = await db.query(
            `SELECT * FROM users WHERE id = ?`,
            [id]
        );
        return rows[0];
    }

    static async updateUser(user) {
        const { id, name, email, password, phone } = user;
        const [result] = await db.query(
            "UPDATE users SET VALUES name = ?, email = ?, password = ?, phone = ? WHERE id = ?",
            [name, email, password, phone, id]
        );
        return result.affectedRows > 0;
    }

    static async deleteUser(id) {
        const [result] = await db.query(
            "DELETE FROM users WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }
}
module.exports = UserModel;
