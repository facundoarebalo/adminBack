import UsersModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.find();
    res.json(users);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

const registroUsuario = async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body;

    const usuario = new UsersModel({ nombre, apellido, email });
    await usuario.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ message: "error al registrar usuario" });
  }
};

export default {
  getAllUsers,
  registroUsuario,
};
