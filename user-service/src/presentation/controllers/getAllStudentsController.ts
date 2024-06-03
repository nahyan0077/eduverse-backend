import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllStudentsController = (dependencies: IDependencies) => {
    const {
        useCases: { getAllStudentsUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            const page = req.query.page ? parseInt(req.query.page as string, 10) : undefined;
            const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;

            console.log(page,limit,"hee heee");
            

            if (page !== undefined && isNaN(page)) {
                res.status(400).json({
                    success: false,
                    message: "Invalid page number"
                });
                return;
            }

            if (limit !== undefined && isNaN(limit)) {
                res.status(400).json({
                    success: false,
                    message: "Invalid limit number"
                });
                return;
            }

            const result = await getAllStudentsUseCase(dependencies).execute(page, limit);

            res.status(200).json({
                success: true,
                data: result,
                message: "All students fetched"
            });
        } catch (error) {
            next(error);
        }
    }
}
