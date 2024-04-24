import { Router } from 'express'
import { addNewBlog, deleteBlog, getBlogs, getOneBlog } from '../modules/blog/controller/blogControllers';
import { Auth } from '../middlewares';

const blogRoutes = Router();

blogRoutes.post("/add", Auth, addNewBlog)
blogRoutes.get("/blogs", getBlogs)
blogRoutes.get("/blog/:id", getOneBlog)
blogRoutes.delete("/delete", Auth, deleteBlog)

export default blogRoutes;