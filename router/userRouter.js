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

router.get("/users/:id", async (req, res) => {
  try {
    const user = await UsersModel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});


// crear un usuario

router.post("/users", async (req, res) => {
  const newUser = new UsersModel(req.body);

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
  }
});


// actualizar un usuario

router.put("/users/:id", async (req, res) => {
  try {
    const user = await UsersModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// eliminar un usuario

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await UsersModel.findByIdAndDelete(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
