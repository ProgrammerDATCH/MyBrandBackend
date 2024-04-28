import Joi from 'joi';

const nameRegex = /^(?![0-9])[a-zA-Z0-9]{5,}$/;
const emailRegex = /^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
const idRegex = /^[0-9a-fA-F]{24}$/;

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registration = Joi.object({
  name: Joi.string().pattern(nameRegex).required(),
  email: Joi.string().email().regex(emailRegex).required(),
  password: Joi.string().pattern(passwordRegex).required(),
});

const emailVerification = Joi.object({
  email: Joi.string().email().required(),
});

const updateUser = Joi.object({
  name: Joi.string().pattern(nameRegex).required(),
  email: Joi.string().email().required(),
})

const verifyToken = Joi.object({
  email: Joi.string().email().required(),
  token: Joi.string().pattern(/^\d{6}$/).required(),
});

export default { login, registration, emailVerification, updateUser, verifyToken };