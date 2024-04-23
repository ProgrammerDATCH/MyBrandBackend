import Suggestion from "../../../database/models/Suggestion";

const createSuggestion = async (newSuggestion: Record<string, string>) => {
    return await Suggestion.create(newSuggestion)
}

const getAllSuggestions = async () => {
    return await Suggestion.find()
}

const deleteSuggestionById = async (id: string) => {
    return await Suggestion.deleteOne({_id: id})
}

const findSuggestionById = async (id: string) => {
    return await Suggestion.findOne({_id: id})
}

export {
    createSuggestion,
    deleteSuggestionById,
    findSuggestionById,
    getAllSuggestions
}