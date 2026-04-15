import { prisma } from '../../../shared/infra/prisma'

interface IUserUpdate {
    id: string;
    name?: string;
    email?: string;
}


export class UpdateUserService {

    async execute({id, name, email}: IUserUpdate){
        const existUser = await prisma.user.findUnique({where:{ id }})
        if(!existUser){
            throw new Error("usuario não Existe em nosso banco de dados!");
        }

        if(email && email !== existUser.email){
            const emailInUse = await prisma.user.findUnique({where: {email}});
            if(emailInUse){
                throw new Error("Este email ja esta em uso")
            }
        }
        const user = await prisma.user.update({
            where: {id},
            data: {name, email},
            select: {id: true, name: true, email: true}
        });
        return user
    }
}