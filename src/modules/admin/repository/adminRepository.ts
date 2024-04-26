import Admin from "../../../database/models/Admin";
import Blog from "../../../database/models/Blog";
import Suggestion from "../../../database/models/Suggestion";
import User from "../../../database/models/User";

const findAdmin = async (email: string, password: string) => {
    return await Admin.findOne({email, password});
}

const getAdminInfo = async (id: string) => {
    return await Admin.findOne({_id: id});
}

const totalUsers = async () => {
    return await User.countDocuments();
}

const totalSuggestions = async () => {
    return await Suggestion.countDocuments();
}

const totalBlogs = async () => {
    return await Blog.countDocuments();
}


export {
    findAdmin,
    getAdminInfo,
    totalBlogs,
    totalSuggestions,
    totalUsers,
}