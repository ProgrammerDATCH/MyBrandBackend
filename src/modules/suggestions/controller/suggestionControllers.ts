import { Request, Response } from "express";
import { createSuggestion, deleteSuggestionById, findSuggestionById, getAllSuggestions } from "../repository/suggestionRepositories";
import sendEmail from "../../../middlewares/sendEmail";

const addNewSuggestion = async (req: Request, res: Response) => {
    const {name, email, subject, message} = req.body;
    const newSuggestion = {
        name,
        email,
        subject,
        message
    }
    const newCreatedSuggestion = await createSuggestion(newSuggestion)
    await sendEmail(`MyBrand request from ${name}`, `<p><h2>${subject}</h2><p>${message}</p><p>Respond to: <b>${email}</b><br>Names: <b>${name}</b></p></p>`);
    if(!newCreatedSuggestion) return res.status(500).json({status: false, message: "Suggestion was not created."})
    return res.status(201).json({status: true, message: "Suggestion was created.", id: newCreatedSuggestion._id})
}

const deleteSuggestion = async (req: Request, res: Response) => {
    const {id} = req.body;
    if(!await findSuggestionById(id)) return res.status(500).json({status: false, message: "Suggestion with that id doesn't exist."})
    const { deletedCount } = await deleteSuggestionById(id)
    if( deletedCount < 1) return res.status(500).json({status: false, message: "Deleting suggestion failed."})
    return res.status(200).json({status: true, message: "Suggestion was deleted."})
}

const getSuggestions = async (req: Request, res: Response) => {
    return res.status(200).json({status: true, message: await getAllSuggestions()})
}

export {
    getSuggestions,
    deleteSuggestion,
    addNewSuggestion
}