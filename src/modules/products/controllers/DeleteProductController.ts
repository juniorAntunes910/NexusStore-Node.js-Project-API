import { DeleteproductService } from "../services/DeleteProductService";
import { Request, Response } from "express";

export class DeleteProductController{
    async handle(req: Request, res:Response){
        try{
        const service = new DeleteproductService();
        const {id} = req.params;
        const { name, description, price, category } = req.body;
        const result = await service.execute({id: id as string});
        res.status(200);
        } catch(error){
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }
            res.status(400).json({error: "Internal Server Error"})
        }
    }
}