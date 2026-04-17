import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";
import { z } from 'zod'

export class CreateProductController{
    async handle(req: Request, res: Response){

        const productSchema = z.object({
            name: z.string().min(3, "O nome do produto precisa de pelos menos 3 caracteres"),
            description: z.string(),
            price: z.number().positive("O preço precisa ser positivo"),
            stock: z.number().positive("O estoque precisa ser positivo"),
            category: z.string()
        })
        
        try{
            const {name, description, price, stock, category} = productSchema.parse(req.body);
            const service = new CreateProductService();
            const product = await service.execute({
                name,
                description,
                price,
                stock,
                category
            })
            return res.status(201).json(product);
        } catch(error){
            if(error instanceof Error){
                res.status(400).json({error: error.message})
            }
            res.status(400).json({error: "Internal Server Error"})
        }

    }
}