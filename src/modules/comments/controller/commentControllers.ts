import { Request, Response } from "express";
import { createComment, findCommentById, deleteCommentById, getCommentsByBlogId, deleteCommentsByBlogId, findCommentsByBlogId } from "../repository/commentRepositories";

const addNewComment = async (req: Request, res: Response) => {
    const {name, email, comment, blogId} = req.body;
    const newComment = {
        name,
        email,
        comment,
        blogId,
    }
    const newCreatedComment = await createComment(newComment)
    if(!newCreatedComment) return res.json({status: false, message: "Comment was not created."})
    return res.json({status: true, message: "Comment was created.", id: newCreatedComment._id})
}

const deleteComment = async (req: Request, res: Response) => {
    const {id} = req.body;
    if(!id || id === ""){
        return res.json({status: false, message: "Please add id."})
    }
    
    if(!await findCommentById(id)) return res.json({status: false, message: "Comment with that id doesn't exist."})
    const { deletedCount } = await deleteCommentById(id)
    if( deletedCount < 1) return res.json({status: false, message: "Deleting comment failed."})
    return res.json({status: true, message: "Comment was deleted."})
}

const deleteBlogComments = async (req: Request, res: Response) => {
    const {blogId} = req.body;
    if(!blogId || blogId === ""){
        return res.json({status: false, message: "Please add id."})
    }
    if((await findCommentsByBlogId(blogId)).length < 0) return res.json({status: false, message: "No Comments for that blog."})
    const { deletedCount } = await deleteCommentsByBlogId(blogId)
    if( deletedCount < 1) return res.json({status: false, message: "Deleting comments failed."})
    return res.json({status: true, message: "Comments was deleted."})
}


const getBlogComments = async (req: Request, res: Response) => {
    const blogId = req.params.blogId;
    return res.json({status: true, message: await getCommentsByBlogId(blogId)})
}

export {
    addNewComment,
    deleteComment,
    getBlogComments,
    deleteBlogComments,
}