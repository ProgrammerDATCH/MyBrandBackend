import { Request, Response } from "express";
import { createBlog, deleteBlogById, findBlogById, getAllBlogs, updateBlogById } from "../repository/blogRepositories";
import uploadImage from "../../../middlewares/uploadImage";

const addNewBlog = async (req: Request, res: Response) => {
    const {title, description, image} = req.body;
    const imageLink = await uploadImage(image);
    const newBlog = {
        title,
        description,
        image: imageLink,
        userId: (req as any).userId,
    }
    const newCreatedBlog = await createBlog(newBlog)
    if(!newCreatedBlog) return res.status(500).json({status: false, message: "Blog was not created."})
    return res.status(201).json({status: true, message: "Blog was created.", id: newCreatedBlog._id})
}

const updateBlog = async (req: Request, res: Response) => {
    const {id, title, description} = req.body;
    const updatedBlog = await updateBlogById(id, {title, description});
    if(updatedBlog.modifiedCount > 0) res.status(200).json({status: true, message: "Blog updated successfully"});
    else res.status(500).json({status: false, message: "Failed to update a Blog"});
}

const deleteBlog = async (req: Request, res: Response) => {
    const {id} = req.body;
    if(!await findBlogById(id)) return res.status(400).json({status: false, message: "Blog with that id doesn't exist."})
    const { deletedCount } = await deleteBlogById(id)
    if( deletedCount < 1) return res.status(500).json({status: false, message: "Deleting blog failed."})
    return res.status(200).json({status: true, message: "Blog was deleted."})
}

const getOneBlog = async (req: Request, res: Response) => {
    const id = req.params.id;
    if(!await findBlogById(id)) return res.status(400).json({status: false, message: "Blog with that id doesn't exist."})
    return res.status(200).json({status: true, message: await findBlogById(id)})
}

const getBlogs = async (req: Request, res: Response) => {
    return res.status(200).json({status: true, message: await getAllBlogs()})
}

export {
    addNewBlog,
    deleteBlog,
    getBlogs,
    getOneBlog,
    updateBlog
}