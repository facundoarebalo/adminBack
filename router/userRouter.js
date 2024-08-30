import express from "express";

const router = express.Router();

//traer todos los usuarios
router.get("/users", (req, res) => {
  console.log(req, "req");
  res.status(200).json({ message: "Hola desde la ruta principal" });
});

// traer un usuario


// crear un usuario


// actualizar un usuario


// eliminar un usuario

export default router;
