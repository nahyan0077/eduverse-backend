import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const updateCourseController = (dependencies: IDependencies) => {
    const { useCases: { updateCourseUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: any = req.body;
            const incrementStudentsEnrolled: any = req.query?.incrementStudentsEnrolled;

            console.log(incrementStudentsEnrolled,"ernooledddd incrree");
            

            console.log(data, "set update course data");

            const result = await updateCourseUseCase(dependencies).execute(data, incrementStudentsEnrolled);

            if (!result) {
                throw new Error("Course updation failed!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "Course updated!"
            });
        } catch (error: any) {
            console.error("Error updating course:", error);
            next(error);
        }
    };
};
