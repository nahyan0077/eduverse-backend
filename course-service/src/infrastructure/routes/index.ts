import { IDependencies } from '@/application/interfaces/IDependencies'
import { controller } from '../../presentation/controller'
import {Router} from 'express'

export const routes = (dependancies: IDependencies) => {
    const router = Router()

    const  { addCategory } = controller(dependancies)

    router.route('/add-category').post(addCategory)

    return router

}