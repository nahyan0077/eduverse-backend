import { NextFunction, Request, Response } from "express";
import { IDependancies } from "../interfaces/IDependancies";

export const checkExistingUserNameUseCase = (dependancies: IDependancies) => {
    const { repositories: {isExistingUserName} } = dependancies
    return {
        execute: async (username: string) => {
            try {
                return await isExistingUserName(username)
                
            } catch (error: any) {
                throw new Error(error?.message);
            }
        }
    }
}