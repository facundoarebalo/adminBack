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






export default {
    getAllUsers
}
