import { ReadProductService } from "../services/ReadProductService";
import { Request, Response } from "express";

export class ReadProductController{
    async handle(req: Request, res: Response){

        try{
        const service = new ReadProductService();
        const products = await service.execute();
        return res.json(products);
    } catch(error) {
        if(error instanceof Error){
        return res.status(400).json({error: error.message})
        }
        return res.status(400).json({error: "Internal Server Error"})
    }
    }
}