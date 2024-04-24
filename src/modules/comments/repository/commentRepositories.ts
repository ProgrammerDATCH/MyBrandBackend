import Comment from "../../../database/models/Comment";

const createComment = async (newComment: Record<string, string>) => {
    return await Comment.create(newComment)
}

const getCommentsByBlogId = async (blogId: string) => {
    return await Comment.find({blogId})
}

const deleteCommentById = async (id: string) => {
    return await Comment.deleteOne({_id: id})
}

const findCommentById = async (id: string) => {
    return await Comment.findOne({_id: id})
}

const findCommentsByBlogId = async (blogId: string) => {
    return await Comment.find({blogId})
}

const deleteCommentsByBlogId = async (blogId: string) => {
    return await Comment.deleteMany({blogId})
}


export {
    createComment,
    getCommentsByBlogId,
    deleteCommentById,
    deleteCommentsByBlogId,
    findCommentById,
    findCommentsByBlogId
}