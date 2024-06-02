import { IDependencies } from "@/application/interfaces/IDependencies";
import verifyInstructorProducer from "../../infrastructure/kafka/producer/verifyInstructorProducer";
import { Request, Response, NextFunction } from "express";


export const verfiyInstructorController = (dependencies: IDependencies) => {
    const { useCases: {verifyInstructorUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {id, email} = req.body

            console.log(req.body,"verify instorcto data");
            

            const verfied = await verifyInstructorUseCase(dependencies).execute(id)

            console.log("instructor verified", verfied);
            

            if (!verfied) {
                throw new Error("intructor verfication error");
            }

            //produced instructor verification to notification and auth services

            await verifyInstructorProducer({id,email})

            res.status(200).json({
                success: true,
                data: {},
                message: "instructor verified..!"
            });

        } catch (error: any) {
            next(error)
        }
    }
}