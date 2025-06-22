import db from "../database/connection.js";

async function ListarByEmail(email) {
  try {
    const con = await db.getConnection();
    const [user] = await con.execute("SELECT * FROM usuarios WHERE email = ?", [email]);
    return user.length === 0 ? [] : user[0];
  } catch (error) {
    console.error("Erro no repository ListarByEmail:", error);
    throw error; // relança para service tratar
  }
}

async function Inserir(nome, sobrenome, email, senha) {
  try {
    const con = await db.getConnection();
    const sql = "INSERT INTO usuarios(nome, sobrenome, email, senha) VALUES (?,?,?,?)";
    const [result] = await con.query(sql, [nome, sobrenome, email, senha]);
    return result;
  } catch (error) {
    console.error("Erro no repository Inserir:", error);
    throw error;
  }
}

// Função para listar todos os usuários (sem senha)
async function Listar() {
  try {
    const con = await db.getConnection();
    const [rows] = await con.query("SELECT id, nome, sobrenome, email FROM usuarios");
    return rows;
  } catch (error) {
    console.error("Erro no repository Listar:", error);
    throw error;
  }
}

export default { ListarByEmail, Inserir, Listar };

