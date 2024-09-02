import express from "express";
import "dotenv/config";
import userRouter from "./router/userRouter.js";
import cors from "cors";
import connectDB from "./database/db.js";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRouter);

const initApp = () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor iniciando en el puerto: ${PORT}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error}`);
  }
};

initApp();
