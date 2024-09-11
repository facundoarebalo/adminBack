import mongoose from "mongoose";

const URI = process.env.MONGO_URI;
// const DB = process.env.MONGO_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(`${URI}`);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectDB;
