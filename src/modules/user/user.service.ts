import { IUser } from "./user.interface";
import { User } from "./user.model";


// Create User
const createUser = async (payload: Partial<IUser>)=>{

    const {name, email} = payload;

    const user = await User.create({
        name,
        email
    })
    return user
}


// Get all users
const getUsers = async()=>{
    const users = await User.find({})
    const total = await User.countDocuments({});

    return {
        users,
        total
    }
}


export const UserServices = {
    createUser,
    getUsers
}