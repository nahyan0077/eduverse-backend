import {IRepositores} from './IRepositories'
import { IUseCases } from './IUseCases'

export interface IDependancies {
    repositories: IRepositores,
    useCases: IUseCases
}