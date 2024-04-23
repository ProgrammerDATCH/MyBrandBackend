import Blog from "../../../database/models/Blog";

const createBlog = async (newBlog: Record<string, string>) => {
    return await Blog.create(newBlog)
}

const getAllBlogs = async () => {
    return await Blog.find()
}

const deleteBlogById = async (id: string) => {
    return await Blog.deleteOne({_id: id})
}

const findBlogById = async (id: string) => {
    return await Blog.findOne({_id: id})
}

export {
    createBlog,
    deleteBlogById,
    findBlogById,
    getAllBlogs
}