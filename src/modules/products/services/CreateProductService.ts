import { Decimal } from '@prisma/client/runtime/client';
import { prisma } from '../../../shared/infra/prisma'

interface IProductRequest {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
}


export class CreateProductService{
    async execute({name, description, price, stock, category}: IProductRequest){
        
    const product = await prisma.product.create({
        data: {
            name,
            description,
            price,
            stock,
            category
        },
    });
    return product
}
}

/* 

        const user = await prisma.user.create({
            data: {
                name, 
                email,
                password: hashedPassword,
                role: role || "USER"
                // O role vai ser o padrão User que foi configurado no Schema.prisma
            },
        });
        return user
    }  

*/