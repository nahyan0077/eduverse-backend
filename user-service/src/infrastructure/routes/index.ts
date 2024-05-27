import { IDependencies } from '@/application/interfaces/IDependencies'
import { controllers } from '@/presentation/controllers'
import {Router} from 'express'

export const userRoutes = (dependencies: IDependencies) => {
    const { getAllINstructors } = controllers(dependencies)

    const router = Router()

    router.route('/get-all-instructores').get(getAllINstructors)

    return router
}