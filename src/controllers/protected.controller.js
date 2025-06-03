class ProtectedController {
    static listUsers(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static findUser(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static updateUser(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static deleteUser(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static listPets(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static searchPet(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static addPet(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static updatePet(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static deletePet(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static listAdoptions(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }

    static addAdoption(req, res) {
        try {
        } catch (error) {
            return res.status(500).json({
                message: "Erro",
                error: error.message,
            });
        }
    }
}

module.exports = ProtectedController;
