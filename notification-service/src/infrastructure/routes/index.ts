import { jwtMiddleware } from '@/_lib/common/middlewares/jwtMiddleware'
import { IDependencies } from '@/application/interfaces/IDependencies'
import { controllers } from '@/presentation/controllers'
import {Router} from 'express'

export const notificationRouter = (dependencies: IDependencies) => {
    const { sendVerificationMail } = controllers(dependencies) 

    const router = Router()

    router.route('/email-verification').get(jwtMiddleware, sendVerificationMail)

    return router
}