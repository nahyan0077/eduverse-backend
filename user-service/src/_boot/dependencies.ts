import { IDependencies } from "@/application/interfaces/IDependencies";
import * as useCases from '../application/useCases'
import * as repositories from '../infrastructure/database/mongo/respositories'

export const dependencies : IDependencies = {
    repositories,
    useCases
}