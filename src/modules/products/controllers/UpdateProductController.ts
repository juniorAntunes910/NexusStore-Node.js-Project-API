import { UpdateProductService } from "../services/UpdateProductService";
import { Request, Response } from "express";

export class UpdateProductController{
    async handle(req: Request, res: Response){
        
        try{
            const { id} = req.params as {id: string};
            const { name, description, price, category} = req.body; 
            const service = new UpdateProductService();
            const product = await service.execute({id, name, description, price, category})
            res.status(200).json(product);
        } catch(error){
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }
            res.status(400).json({error: "Internal Server Error"});
        }
    }
}