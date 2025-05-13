import serviceUsuarios from "../services/candidatoService.js";
async function Listar(req, res){
    const usuarios = await serviceUsuarios.Listar();
    res.status(200).json({usuarios});        
}

async function Inserir(req, res) {
    const {nome, sobrenome} = req.body;     
    const usuarios = await serviceUsuarios.Inserir(nome, email, senha) 
    res.status(201).json({"mensagem":"sucesso"}) 
}

async function Editar(req, res) {
    const id = req.params.id;
    const {nome, sobrenome} = req.body;     
    const usuarios = await serviceUsuarios.Editar(id, nome, email, senha) 
    res.status(200).json(usuarios) 
}

async function Excluir(req, res) {
    const id = req.params.id;
        
    const aluno = await serviceUsuarios.Excluir(id) 
    res.status(200).json(usuarios) 
}

export default {Listar, Inserir, Editar, Excluir}