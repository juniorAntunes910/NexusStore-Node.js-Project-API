import { prisma } from '../../../shared/infra/prisma'

export class ReadUserService{
    async execute(){
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            }
        });
        return users
    }
}