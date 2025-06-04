const express = require("express");
const {
    authenticateToken,
    authorizeRole,
    authorizeRoleAdminOrOwner,
} = require("../middlewares/auth.middleware");

const ProtectedController = require("../controllers/protected.controller");
const router = express.Router();

router.get(
    "/users",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.listUsers
);
router.get(
    "/users/:id",
    authenticateToken,
    authorizeRoleAdminOrOwner(),
    ProtectedController.findUser
);
router.put(
    "/users/:id",
    authenticateToken,
    authorizeRoleAdminOrOwner(),
    ProtectedController.updateUser
);
router.delete(
    "/users/:id",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.deleteUser
);

router.get(
    "/pets",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.listPets
);
router.get(
    "/pets/:id",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.findPet
);
router.post(
    "/pets",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.addPet
);
router.put(
    "/pets/:id",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.updatePet
);
router.delete(
    "/pets/:id",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.deletePet
);

router.get(
    "/adoptions",
    authenticateToken,
    authorizeRole("admin"),
    ProtectedController.listAdoptions
);
router.post("/adoptions", authenticateToken, ProtectedController.addAdoption);

module.exports = router;
