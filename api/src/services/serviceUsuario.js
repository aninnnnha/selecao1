import bcrypt from 'bcrypt';
import repoUsuario from "../repositories/repositoryUsuario.js";

async function Login(email, senha) {
  if (!email || !senha) {
    throw new Error("Email e senha são obrigatórios.");
  }

  const user = await repoUsuario.ListarByEmail(email);

  if (!user) {
    // Retorna null ou vazio para indicar usuário não encontrado
    return null;
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) {
    return null;
  }

  // Remove a senha do objeto retornado para segurança
  delete user.senha;

  // Aqui você pode gerar um token real (JWT, por exemplo)
  user.token = "abcd1234";

  return user;
}

async function Inserir(nome, sobrenome, email, senha) {
  if (!nome || !sobrenome || !email || !senha) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  const nomeMaiusculo = nome.toUpperCase();

  // Criptografa a senha antes de salvar
  const hashSenha = await bcrypt.hash(senha, 10);

  const user = await repoUsuario.Inserir(nomeMaiusculo, sobrenome, email, hashSenha);

  return user;
}

// Função para listar todos os usuários, se precisar
async function Listar() {
  return await repoUsuario.Listar();
}

export default { Login, Inserir, Listar };
