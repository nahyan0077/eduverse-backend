import { IDependencies } from '@/application/interfaces/IDependencies'
import * as repositories from '../infrastructure/database/mongodb/repositories'
import * as useCases from '../application/useCases'

export const dependancies: IDependencies = {
    repositories,
    useCases
}