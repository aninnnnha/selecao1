import con from "../database/connection.js";
async function ListarByEmail(email){
    let sql = "SELECT * FROM USER WHERE EMAIL = ?";
    const [user] = await (con.connection).execute(sql, [email]);
    if(user.length == 0)
        return []
    else
        return user[0];
}

async function Inserir(nome, sobrenome, email, senha){
    let sql = "INSERT INTO USER(nome, sobrenome, email, senha) VALUES (?,?,?,?)";
    const [user] = await (con.connection).query(sql, [nome, sobrenome, email, senha]);
    return user;
}


export default {ListarByEmail, Inserir}