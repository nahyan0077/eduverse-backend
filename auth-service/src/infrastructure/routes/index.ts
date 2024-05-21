import {Router} from 'express'
import { IDependancies } from '@/application/interfaces/IDependancies'
import { controllers } from '../../presentation/controller'

export const routes = (dependancies: IDependancies) => {

    const { signup, findUserByEmail, checkExistingUserName } = controllers(dependancies)

    const router = Router()

    router.route("/signup").post(signup)

    router.route("/available-email/:email").get(findUserByEmail)

    router.route("/available-username/:username").get(checkExistingUserName)

    return router

}