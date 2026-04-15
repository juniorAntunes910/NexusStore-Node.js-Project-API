import { Request, Response } from "express";
import { ReadUserService } from "../services/ReadUsers";
import { router } from "../../../router";

    export class ReadUsersController {
        async handle(req: Request, res: Response){
            try{
                const service = new  ReadUserService();
                const users = await service.execute();

                return res.json(users);
            } catch(error){
                if(error instanceof Error){
                    return res.status(400).json({ error: error.message});
                }
                return res.status(400).json({error: "Internal Server Error"});
            }
        }
    }