import { Router } from "express";
import candidatoController from "../src/controllers/usuarioController.js";
const router = Router();
router.get("/", (req, res) =>{
    res.status(200).send("Pagina HOME")
})

router.post("/alunos", candidatoController.Inserir)
router.get("/alunos", candidatoController.Listar)
router.put("/alunos/:id", candidatoController.Editar)
router.delete("/alunos/:id", candidatoController.Excluir)
export default router;
