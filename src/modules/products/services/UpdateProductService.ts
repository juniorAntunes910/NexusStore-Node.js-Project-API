import { prisma } from "../../../shared/infra/prisma"

interface IProductUpdate{
    id: string,
    name?: string,
    description?: string,
    price?: number,
    category?: string
}

export class UpdateProductService{
    async execute({id, name, description, price, category}: IProductUpdate){
        
        const existProduct = await prisma.product.findUnique({where: {id}});
        if(!existProduct){
            throw new Error("Produto não existe");
        }

        if(existProduct.price <= 0){
            throw new Error("Preço não pode ser menor ou igual a zero");
        }
        
        const product = await prisma.product.update({
            where: { id },
            data: {name,description, price, category}
        });

        return product;
    }   
}