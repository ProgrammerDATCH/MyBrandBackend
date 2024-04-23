import { Router } from 'express'
import { addNewSuggestion, deleteSuggestion, getSuggestions } from '../modules/suggestions/controller/suggestionControllers';

const suggestionRoutes = Router();

suggestionRoutes.post("/add", addNewSuggestion)
suggestionRoutes.get("/suggestions", getSuggestions)
suggestionRoutes.delete("/delete", deleteSuggestion)

export default suggestionRoutes;