import { Router } from 'express'
import { addNewSuggestion, deleteSuggestion, getSuggestions } from '../modules/suggestions/controller/suggestionControllers';
import { AdminAuth } from '../middlewares/AdminAuth';

const suggestionRoutes = Router();

suggestionRoutes.post("/add", addNewSuggestion)
suggestionRoutes.get("/suggestions", AdminAuth, getSuggestions)
suggestionRoutes.delete("/delete", AdminAuth,deleteSuggestion)

export default suggestionRoutes;