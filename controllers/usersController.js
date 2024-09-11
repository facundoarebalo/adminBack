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

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email } = req.body;
    const usuario = await UsersModel.findByIdAndUpdate(
      id,
      { nombre, apellido, email },
      { new: true }
    );
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error al actualizar usuario" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UsersModel.findByIdAndDelete(id);
    res.status(200).json({ message: "usuario eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "error al eliminar usuario" });
  }
};

export default {
  getAllUsers,
  registroUsuario,
  deleteUser,
  updateUser,
};
