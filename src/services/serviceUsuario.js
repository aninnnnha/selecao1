import bcrypt from 'bcrypt';
import repoUsuario from "../repositories/repositoryUsuario.js";
async function Login(email, senha){   
    const user = await repoUsuario.ListarByEmail(email);  
    if(user.length == 0)
        return []
    else{
        if(await  bcrypt.compare(senha, user.senha)){
            delete user.senha
            user.token = "abcd1234"
            return user;
        }else{
            return []
        }
    }
        
               
}

async function Inserir(nome, sobrenome, email, senha){
    var n = nome.toUpperCase()
    const password = await bcrypt.hash(senha, 10)   
    const user = await repoUsuario.Inserir(n, sobrenome, email, password);
    return user;
}



export default {Login, Inserir}