import Joi from 'joi';

const idRegex = /^[0-9a-fA-F]{24}$/;
const nameRegex = /^(?![0-9])[a-zA-Z0-9]{5,}$/;
const emailRegex = /^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const newSuggestion = Joi.object({
  name: Joi.string().pattern(nameRegex).required(),
  email: Joi.string().pattern(emailRegex).required(),
  subject: Joi.string().min(5).required(),
  message: Joi.string().min(5).required()
});

const deleteSuggestion = Joi.object({
  id: Joi.string().pattern(idRegex).required()
});

export default { newSuggestion, deleteSuggestion };