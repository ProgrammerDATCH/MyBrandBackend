import Admin from "../../../database/models/Admin";

const findAdmin = async (email: string, password: string) => {
    return await Admin.findOne({email, password});
}

const getAdminInfo = async (id: string) => {
    return await Admin.findOne({_id: id});
}


export {
    findAdmin,
    getAdminInfo
}