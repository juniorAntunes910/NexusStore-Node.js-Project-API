import { Request, Response} from 'express'
import { CreateUserService } from '../services/CreateUserService'

export class CreateUserController {
    
    async  handle (req: Request, res: Response) { // Chama REQ e RES
        
        try{
        const { name, email, password } = req.body; // Coleta do Req 
        const service = new CreateUserService(); // instancia o service
        const user = await service.execute( { 
            name,
            email,
            password
        })
        return res.status(201).json(user);
        } catch(error) {
            return res.status(400).json({erro: 'Erro ao criar usuário'} )
        }
    }
}