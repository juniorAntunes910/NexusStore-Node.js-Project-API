import express from 'express'
import { CreateUserController } from './modules/users/controllers/CreateUserController'

const app = express();
app.use(express.json()); // Desta forma o express é avisado que ele vai receber json 


//Criando a rota post de usuarios 
app.post('/users', async (req, res) => { // Req tudo que o cliente enviou | Res o que o servidor vai responder
    try {
        const service = new CreateUserController();
        const user = await service.handle(req, res);
        res.status(201).json(user);
    } catch(erro){
        res.status(400).send("Erro ao criar o usuario")
    }
})


app.listen(3000, () => {
    console.log("Servidor Rodando!")
})