import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import rejectInstructorProducer from "@/infrastructure/kafka/producer/rejectInstructorProducer";


export const rejectInstructorController = (dependencies: IDependencies) => {
    const { useCases: {rejectInstructorUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id, email} = req.body

            console.log(req.body,"verify instorcto data");
            

            const rejected = await rejectInstructorUseCase(dependencies).execute(id)

            console.log("instructor rejection", rejected);
            

            if (!rejected) {
                throw new Error("intructor verfication error");
            }

            //produced instructor rejection to notification and auth services

            await rejectInstructorProducer({id,email})

            res.status(200).json({
                success: true,
                data: {},
                message: "instructor rejected..!"
            });

        } catch (error: any) {
            next(error)
        }
    }
}