import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.routes";

export const router = Router()

const moduleRouter = [
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path:"/auth",
        route : AuthRoutes
    }
]

moduleRouter.forEach((route)=>{
    router.use(route.path, route.route)
})