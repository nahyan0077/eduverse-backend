import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const getPaymentSessionController = (dependencies: IDependencies) => {
	const {
		useCases: { getPaymentSessionByIdUseCase },
	} = dependencies;

	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;

			const result = await getPaymentSessionByIdUseCase(dependencies).execute(id);

            if (!result) {
                throw new Error("payment session not-found!");
            }

            res.status(200).json({
                success: true,
                data: result,
                message: "payment session!"
            });

		} catch (error: any) {
            next(error      )
        }
	};
};
