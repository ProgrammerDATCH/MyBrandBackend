import User from "../../../database/models/User";

const createUser = async (body: any) => {
    return await User.create(body);
}

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
    findUserById
}