import { Router } from 'express'
import { addNewBlog, deleteBlog, getBlogs, getOneBlog } from '../modules/blog/controller/blogControllers';

const blogRoutes = Router();

blogRoutes.post("/add", addNewBlog)
blogRoutes.get("/blogs", getBlogs)
blogRoutes.get("/blog/:id", getOneBlog)
blogRoutes.delete("/delete", deleteBlog)

export default blogRoutes;