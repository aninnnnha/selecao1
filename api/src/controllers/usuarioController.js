import serviceUsuario from "../services/serviceUsuario.js";

async function Login(req, res) {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ error: "Email e senha são obrigatórios." });
    }

    const user = await serviceUsuario.Login(email, senha);

    if (!user || (Array.isArray(user) && user.length === 0)) {
      return res.status(401).json({ error: "Email ou senha inválido." });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Erro no Login:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
}

async function Inserir(req, res) {
  try {
    const { nome, sobrenome, email, senha } = req.body;

    if (!nome || !sobrenome || !email || !senha) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios." });
    }

    await serviceUsuario.Inserir(nome, sobrenome, email, senha);
    return res.status(201).json({ mensagem: "Usuário criado com sucesso." });
  } catch (error) {
    console.error("Erro ao inserir usuário:", error);

    // Tratamento básico para erro de email duplicado, se seu BD lançar erro específico
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: "Email já cadastrado." });
    }

    return res.status(500).json({ error: "Erro interno do servidor." });
  }
}
async function Listar(req, res) {
  try {
    const usuarios = await serviceUsuario.Listar();
    return res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
    return res.status(500).json({ error: "Erro interno do servidor." });
  }
}

export default { Login, Inserir, Listar };
