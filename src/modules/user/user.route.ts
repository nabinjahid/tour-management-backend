import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.post("/register", UserController.createUser)
router.post("/all-users", UserController.getUsers)

export const UserRoutes = router