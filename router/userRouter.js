import express from "express";
import usersController from "../controllers/usersController.js";

const router = express.Router();

//traer todos los usuarios
router.get("/users", usersController.getAllUsers);

// crear un usuario
router.post("/register", usersController.registroUsuario);

// actualizar un usuario

// eliminar un usuario

export default router;
