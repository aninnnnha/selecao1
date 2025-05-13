import repoUsuario from "../repositories/candidatoRepository.js";
async function Listar(){
    const usuario = await repoUsuario.Listar();  
    return usuarios;    
}

async function Inserir(nome, email, senha){
    const usuraio = await repoAluno.Inserir(nome, email, senha);
    return usuario;
}

async function Editar(id, nome, email, senha){
    const usuario = await repoUsuario.Editar(id, nome, email, senha);
    return usuarios;
}
async function Excluir(id){
    const usuario= await repoUsuario.Excluir(id);
    return usuarios;
}

export default {Listar, Inserir, Editar, Excluir}