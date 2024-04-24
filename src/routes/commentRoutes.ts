import { Router } from 'express'
import { addNewComment, deleteBlogComments, deleteComment, getBlogComments } from '../modules/comments/controller/commentControllers';

const commentRoutes = Router();

commentRoutes.post("/add", addNewComment)
commentRoutes.get("/comments/:blogId", getBlogComments)
commentRoutes.delete("/delete", deleteComment)
commentRoutes.delete("/deleteBlogComments", deleteBlogComments)

export default commentRoutes;