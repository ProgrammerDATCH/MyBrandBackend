import { Request, Response } from "express";
import { createSuggestion, deleteSuggestionById, findSuggestionById, getAllSuggestions } from "../repository/suggestionRepositories";

const addNewSuggestion = async (req: Request, res: Response) => {
    const {name, email, subject, message} = req.body;
    if(!name || name === "" || !email || email === "" || !subject || subject === "" || !message || message === ""){
        return res.json({status: false, message: "Please add name, email, subject and message"})
    }
    const newSuggestion = {
        name,
        email,
        subject,
        message
    }
    const newCreatedSuggestion = await createSuggestion(newSuggestion)
    if(!newCreatedSuggestion) return res.json({status: false, message: "Suggestion was not created."})
    return res.json({status: true, message: "Suggestion was created.", id: newCreatedSuggestion._id})
}

const deleteSuggestion = async (req: Request, res: Response) => {
    const {id} = req.body;
    if(!id || id === ""){
        return res.json({status: false, message: "Please add id."})
    }
    
    if(!await findSuggestionById(id)) return res.json({status: false, message: "Suggestion with that id doesn't exist."})
    const { deletedCount } = await deleteSuggestionById(id)
    if( deletedCount < 1) return res.json({status: false, message: "Deleting suggestion failed."})
    return res.json({status: true, message: "Suggestion was deleted."})
}

const getSuggestions = async (req: Request, res: Response) => {
    return res.json({status: true, message: await getAllSuggestions()})
}

export {
    getSuggestions,
    deleteSuggestion,
    addNewSuggestion
}