import { Request, Response } from "express";
import { createBlog, deleteBlogById, findBlogById, getAllBlogs } from "../repository/blogRepositories";

const addNewBlog = async (req: Request, res: Response) => {
    const {title, description, image} = req.body;
    const newBlog = {
        title,
        description,
        image
    }
    const newCreatedBlog = await createBlog(newBlog)
    if(!newCreatedBlog) return res.json({status: false, message: "Blog was not created."})
    return res.json({status: true, message: "Blog was created.", id: newCreatedBlog._id})
}

const deleteBlog = async (req: Request, res: Response) => {
    const {id} = req.body;
    if(!id || id === ""){
        return res.json({status: false, message: "Please add id."})
    }
    
    if(!await findBlogById(id)) return res.json({status: false, message: "Blog with that id doesn't exist."})
    const { deletedCount } = await deleteBlogById(id)
    if( deletedCount < 1) return res.json({status: false, message: "Deleting blog failed."})
    return res.json({status: true, message: "Blog was deleted."})
}

const getOneBlog = async (req: Request, res: Response) => {
    const id = req.params.id;
    if(!id || id === ""){
        return res.json({status: false, message: "Please add id."})
    }
    if(!await findBlogById(id)) return res.json({status: false, message: "Blog with that id doesn't exist."})
    return res.json({status: true, message: await findBlogById(id)})
}

const getBlogs = async (req: Request, res: Response) => {
    return res.json({status: true, message: await getAllBlogs()})
}

export {
    addNewBlog,
    deleteBlog,
    getBlogs,
    getOneBlog,
}