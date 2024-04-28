import Token from "../../../database/models/Tokens";
import User from "../../../database/models/User";

const createUser = async (body: any) => {
    return await User.create(body);
}

//token start

const addUserToken = async(userId: string, token: string) => {
    return await Token.create({userId, token})
}

const checkToken = async(userId: string, token: string) => {
    return await Token.findOne({userId, token})
}

const deleteToken = async(id: string) => {
    return await Token.deleteOne({_id: id})
}

const verifyUserStatus = async(userId: string) => {
    return await User.updateOne({_id: userId}, {isVerified: true})
}

//token ends

const getUserInfo = async (userId: string) => {
    return await User.findOne({_id: userId})
}

const getAllRegisteredUsers = async () => {
    return await User.find()
}

const findUserByEmail = async (email: string) => {
    return await User.findOne({email});
}

const findUserById = async (id: string) => {
    return await User.findOne({_id: id});
}

const deleteUserByEmail = async (email: string) => {
    return await User.deleteOne({email});
}

const updateUserByEmail = async (email: string, data: any) => {
    return await User.updateOne({email}, data)
}

export {
    createUser,
    getUserInfo,
    findUserByEmail,
    deleteUserByEmail,
    updateUserByEmail,
    getAllRegisteredUsers,
    findUserById,
    addUserToken,
    checkToken,
    deleteToken,
    verifyUserStatus,
}