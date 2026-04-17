import { prisma } from "../../../shared/infra/prisma"

export class ReadProductService{ 
    async execute(){
        const products = prisma.product.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                stock: true,
                category: true
            }
        })
        return products;
    }
}
