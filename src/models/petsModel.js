const db = require("../config/database");
class PetsModel {

    static async findAnimals() {
        const [rows] = await db.query(
            "SELECT * FROM pets WHERE status = 'available'"
        );
        return rows[0];
    }

    static async getAllAnimals() {
        const [rows] = await db.query(
            "SELECT * FROM pets"
        );
        return rows;
    }

    static async findPetById(id) {
        const [rows] = await db.query(
            `SELECT * FROM pets WHERE id = ?`,
            [id]
        );
        return rows[0];
    }

    static async addPet(pet) {
        const { name, age, species, size, desciption } = pet;
        const [result] = await db.query(
            "INSERT INTO pets (name, age, species, size, status, desciption) VALUES (?, ?, ?, ?, 'available', ?)",
            [name, age, species, size, desciption]
        );
        return result.insertId;
    }

    static async updatePet(pet) {
        const { name, age, species, size, status, desciption, id } = pet;
        const [result] = await db.query(
            "UPDATE pets SET VALUES name = ?, age = ?, species = ?, size = ?, status = ?, desciption = ? WHERE id = ?",
            [name, age, species, size, status, desciption, id]
        );
        return result.affectedRows > 0;
    }

    static async deletePet(id) {
        const [result] = await db.query(
            "DELTE FROM pets WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }

    static async updatePetStatusAdopted(id) {
        const [result] = await db.query(
            "UPDATE pets SET VALUES status = 'adopted' WHERE id = ?",
            [id]
        );
        return result.affectedRows > 0;
    }

}
module.exports = PetsModel;
