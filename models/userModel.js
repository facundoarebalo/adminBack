import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    email: {
      type: String,
      required: true,
      unique: true,
      maxLenght: 50,
    },
  },
  { versionKey: false }
);

const UsersModel = mongoose.model("users", userSchema);

export default UsersModel;
