import ErrorResponse from "../../../_lib/common/error/errorResponse";
import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const createEnrollmentController = (dependencies: IDependencies) => {
  const { useCases: { createEnrollmentUseCase, getEnrollmentByUserIdUseCase } } = dependencies;

  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const enrollments = await getEnrollmentByUserIdUseCase(dependencies).execute(req.body?.userId);

      const existingEnrollment = enrollments?.find(item => item.courseId._id.toString() === req.body?.courseId?.toString());

      if (existingEnrollment) {
        return res.status(200).json({
          success: false,
          data: {},
          message: "You have already enrolled to this course!",
        });
      }

      const result = await createEnrollmentUseCase(dependencies).execute(req.body);

      if (!result) {
        return res.status(200).json({
          success: false,
          data: {},
          message: "Enrollment creation failed!",
        });
      }

      res.status(200).json({
        success: true,
        data: result,
        message: "Enrollment created successfully!",
      });
    } catch (error: any) {
      next(error);
    }
  };
};
