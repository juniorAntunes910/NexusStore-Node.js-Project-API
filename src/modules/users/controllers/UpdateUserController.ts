import { UpdateUserService } from "../services/UpdateUserService";
import { Request, Response } from "express";
    export class UpdateUserController{
        async handle(req: Request, res: Response){
            try{
                const { id } = req.params as {id: string};
                const {name, email} = req.body;

                const service = new UpdateUserService();
                const user = await service.execute({ id, name, email});
                return res.json(user);
            }catch(error){
                if(error instanceof Error){
                    return res.status(400).json({error: error.message});
                }
                return res.status(400).json({error: "Internal Server Error"});
            }
        }
    }