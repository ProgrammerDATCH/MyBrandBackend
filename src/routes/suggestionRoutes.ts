import { Router } from 'express';
import { addNewSuggestion, deleteSuggestion, getSuggestions } from '../modules/suggestions/controller/suggestionControllers';
import { AdminAuth } from '../middlewares/AdminAuth';
import validation from '../middlewares/validation';
import suggestionValidation from '../validations/suggestionValidation';

const suggestionRoutes = Router();

suggestionRoutes.post("/add", validation(suggestionValidation.newSuggestion), addNewSuggestion);
suggestionRoutes.get("/suggestions", AdminAuth, getSuggestions);
suggestionRoutes.delete("/delete", AdminAuth, validation(suggestionValidation.deleteSuggestion), deleteSuggestion);

export default suggestionRoutes;
