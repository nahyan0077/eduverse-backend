import { IDependencies } from '@/application/interfaces/IDependencies'
import { controllers } from '@/presentation/controllers'
import {Router} from 'express'

export const userRoutes = (dependencies: IDependencies) => {
    const { getAllInstructors } = controllers(dependencies)

    const router = Router()

    router.route('/get-all-instructors').get(getAllInstructors)

    return router
}