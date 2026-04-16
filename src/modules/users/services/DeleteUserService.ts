import { prisma } from "../../../shared/infra/prisma";

interface IUserRequest{
   id: string;
}

 export class DeleteUserService{
    async execute( {id}: IUserRequest ){

         const existUser = await prisma.user.findUnique({where: {id}});
         if(!existUser){
            throw new Error("Usuario nao econtrado");
         }
         const user = await prisma.user.delete({where: {id}});
         return user;
    }
 }