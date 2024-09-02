import express from "express";
import UsersModel from "../models/userModel.js";

const router = express.Router();

//traer todos los usuarios
router.get("/users", async (req, res) => {
  try {
    const users = await UsersModel.find();
    res.json(users);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
});

// traer un usuario

// crear un usuario

// actualizar un usuario

// eliminar un usuario

export default router;
