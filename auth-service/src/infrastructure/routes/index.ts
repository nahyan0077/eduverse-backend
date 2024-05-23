import {Router} from 'express'
import { IDependancies } from '@/application/interfaces/IDependancies'
import { controllers } from '../../presentation/controller'
import { jwtMiddleware } from '../../_lib/common/middlewares/jwtMiddleware'

export const routes = (dependancies: IDependancies) => {

    const { signup, findUserByEmail, checkExistingUserName, verifyOtp } = controllers(dependancies)

    const router = Router()

    router.route("/signup").post(signup)

    router.route("/available-email/:email").get(findUserByEmail)

    router.route("/available-username/:username").get(checkExistingUserName)

    router.route('/verify-otp').post(jwtMiddleware,verifyOtp)

    return router

}