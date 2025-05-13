import con from "../database/connection.js";
async function Listar(){
    let sql = "SELECT * FROM USUARIO";
    const [usuario] = await (con.connection).execute(sql);
    return usuarios;
}

async function Inserir(nome, sobrenome){
    let sql = "INSERT INTO USUARIOS(NOME, EMAIL, SENHA) VALUES (?,?)";
    const [usuario] = await (con.connection).query(sql, [nome, sobrenome]);
    return usuarios;
}
async function Editar(id, nome, sobrenome){
    let sql = "UPDATE USURAIO SET NOME=?, EMAIL=? WHERE SENHA=?";
    const [usuario] = await (con.connection).query(sql, [nome, sobrenome, id]);
    return {id};
}

async function Excluir(id){
    let sql = "DELETE FROM USUARIO WHERE LAMATRICULA=?";
    const [usuario] = await (con.connection).query(sql, [id]);
    return {mensagem:"Aluno excluído"};
}


export default {Listar, Inserir, Editar, Excluir}