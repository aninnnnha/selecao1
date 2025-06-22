import db from "../database/connection.js";

async function ListarByEmail(email) {
  const con = await db.getConnection();
  const [user] = await con.execute("SELECT * FROM usuarios WHERE email = ?", [email]);
  return user.length === 0 ? [] : user[0];
}

async function Inserir(nome, sobrenome, email, senha) {
  const con = await db.getConnection();
  let sql = "INSERT INTO usuarios(nome, sobrenome, email, senha) VALUES (?,?,?,?)";
  const [result] = await con.query(sql, [nome, sobrenome, email, senha]);
  return result;
}

export default { ListarByEmail, Inserir };
