import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getAllCourseController = (dependencies: IDependencies) => {
    const {
        useCases: { getAllCourseUseCase },
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const page =  parseInt(req.query.page as string )  ;
            const limit = parseInt(req.query.limit as string);
            const search = req.query.search ? (req.query.search as string) : '';

            console.log(req.query, "query in get all courses");
            console.log(page, limit, search, "parsed query parameters");

            if (page !== undefined && isNaN(page)) {
                res.status(400).json({
                    success: false,
                    message: "Invalid page number",
                });
                return;
            }

            if (limit !== undefined && isNaN(limit)) {
                res.status(400).json({
                    success: false,
                    message: "Invalid limit number",
                });
                return;
            }

		
            const result = await getAllCourseUseCase(dependencies).execute(page, limit, search);

            res.status(200).json({
                success: true,
                data: result,
                message: "All courses fetched",
            });
        } catch (error: any) {
            next(error);
        }
    };
};
