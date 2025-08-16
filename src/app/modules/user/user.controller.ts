/* eslint-disable @typescript-eslint/no-unused-vars */
import {  NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes"
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

// const createUser = async (req:Request, res: Response, next:NextFunction)=>{
//     try {
        
//         const user = await UserServices.createUser(req.body)
        
//         res.status(httpStatus.CREATED).json({
//             message: "User create successfully",
//             user
//         })
//     } catch (error) {
//        next(error)
//     }
// }

// create user
const createUser = catchAsync( async(req:Request, res: Response, next:NextFunction)=> {

    const user = await UserServices.createUser(req.body)
        
        // res.status(httpStatus.CREATED).json({
        //     message: "User create successfully",
        //     user
        // })

        sendResponse(res, {
            success: true,
            statusCode:  httpStatus.CREATED,
            message: "User Created Successfully",
            data: user
        })
})


// update user
const updateUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;
    // const token = req.headers.authorization
    // const verifiedToken = verifyToken(token as string, envVars.JWT_ACCESS_SECRET) as JwtPayload

    // const verifiedToken = req.user;
    const decodedUser = req.user;

    const payload = req.body;
    const user = await UserServices.updateUser(userId, payload, decodedUser)

    // res.status(httpStatus.CREATED).json({
    //     message: "User Created Successfully",
    //     user
    // })

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User Updated Successfully",
        data: user,
    })
})


// Get all usres
const getUsers = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
    
    const {users, total} = await UserServices.getUsers()

    sendResponse(res, {
        success:true,
        statusCode:httpStatus.ACCEPTED,
        message:"All users",
        meta: {
            total: total
        },
        data: users
    })
})
export const UserController = {
    createUser,
    getUsers,
    updateUser
}