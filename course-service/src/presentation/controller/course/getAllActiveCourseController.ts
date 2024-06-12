import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllActiveCoursesController = (dependencies: IDependencies) => {

    const { useCases: {getAllActiveCoursesUseCase} } = dependencies
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            
            const page = parseInt(req.query.page as string) || 0;
            const limit = parseInt(req.query.limit as string) || 0;

            const result = await getAllActiveCoursesUseCase(dependencies).execute(page,limit)
            

            res.status(200).json({
				success: true,
				data: result,
				message: "All active courses fetched",
			});
            
        } catch (error: any) {
            next(error)
        }
    }

}