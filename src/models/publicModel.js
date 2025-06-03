const db = require("../config/database");
class PublicModel {
    static async findByEmail(email) {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
            email,
        ]);
        return rows[0];
    }

    static async create(user) {
        const { name, email, password, phone, role } = user;
        const [result] = await db.query(
            "INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?)",
            [name, email, password, phone, role]
        );
        return result.insertId;
    }

    static async findAnimals() {
        const [rows] = await db.query(
            "SELECT * FROM pets WHERE status = 'available'"
        );
        return rows[0];
    }
}
module.exports = PublicModel;
