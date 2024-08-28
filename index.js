import express from "express";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 3000;

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
