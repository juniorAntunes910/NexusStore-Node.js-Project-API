import { tr } from "zod/locales";
import { DeleteUserService } from "../services/DeleteUserService";
import { Request, Response } from "express";

export class DeleteUserControoler{

    async handle(req: Request, res: Response ){
        
        try{
            const service = new DeleteUserService();
            const {id} = req.params;
            const result = await service.execute({ id: id as string});
            return res.status(202).json(result)
        } catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message})
            }
            return res.status(400).json({error: "Internal Server Error"})
        }
        
    }

}