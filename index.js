import express from "express";
import "dotenv/config";
import userRouter from "./router/userRouter.js";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/api", userRouter);

const initApp = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Servidor iniciando en el puerto: ${PORT}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error}`);
  }
};

initApp();
