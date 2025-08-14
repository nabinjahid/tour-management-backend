import { Router } from "express";
import { UserRoutes } from "../../modules/user/user.route";

export const router = Router()

const moduleRouter = [
    {
        path: "/user",
        route: UserRoutes
    }
]

moduleRouter.forEach((route)=>{
    router.use(route.path, route.route)
})