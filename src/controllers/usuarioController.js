import serviceUsuario from "../services/serviceUsuario.js"
async function Login(req, res){
    const {email, senha} = req.body;
    const user = await serviceUsuario.Login(email, senha)
    if(user.length == 0)
        res.status(401).json({error: "Email ou senha inválido"})
    else
        res.status(200).json(user)


          
}

async function Inserir(req, res) {
    const {nome, sobrenome, email, senha} = req.body;     
    const user = await serviceUsuario.Inserir(nome, sobrenome, email, senha) 
    res.status(201).json({"mensagem":"sucesso"}) 
}



export default {Login, Inserir}