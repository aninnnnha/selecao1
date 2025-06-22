import { Router } from "express";
import candidatoController from "./src/controllers/usuarioController.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("Página HOME");
});

// Rotas de alunos
router.post("/alunos", candidatoController.Inserir);
router.get("/alunos", candidatoController.Listar); // listar todos os alunos (crie essa função no controller)

// Rota de login
router.post("/login", candidatoController.Login);

export default router;
