import { Router } from 'express';
import { addNewBlog, deleteBlog, getBlogs, getOneBlog, updateBlog } from '../modules/blog/controller/blogControllers';
import { Auth } from '../middlewares';
import { AdminAuth } from '../middlewares/AdminAuth';
import validation from '../middlewares/validation';
import blogValidation from '../validations/blogValidation';

const blogRoutes = Router();

blogRoutes.post("/add", Auth, validation(blogValidation.newBlog), addNewBlog);
blogRoutes.get("/blogs", getBlogs);
blogRoutes.get("/blog/:id", getOneBlog);
blogRoutes.patch("/update", AdminAuth, validation(blogValidation.editBlog), updateBlog);
blogRoutes.delete("/delete", AdminAuth, validation(blogValidation.deleteBlog), deleteBlog);

export default blogRoutes;