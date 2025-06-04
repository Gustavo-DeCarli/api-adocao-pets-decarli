const db = require("../config/database");
class AdoptionsModel {

    static async listAdoptions() {
        const [rows] = await db.query("SELECT * FROM adoptions");
        return rows;
    }

    static async addAdoption(adoption) {
        const { user_id, pet_id, adoption_date } = adoption;
        const [result] = await db.query(
            "INSERT INTO adoptions (user_id, pet_id, adoption_date) VALUES (?, ?, ?)",
            [user_id, pet_id, adoption_date]
        );
        return result.insertId;
    }

}
module.exports = AdoptionsModel;
