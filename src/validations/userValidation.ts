import Joi from 'joi';

const nameRegex = /^(?![0-9])[a-zA-Z0-9]{5,}$/;
const emailRegex = /^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;


const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const registration = Joi.object({
  name: Joi.string().pattern(nameRegex).required(),
  email: Joi.string().email().regex(emailRegex).required().messages({
    'string.pattern.base': 'Please use your real email',
  }),
  password: Joi.string().pattern(passwordRegex).required().messages({
    'string.pattern.base': 'Please use combination of Uppercase, lowercase, special characters, and at least 8 characters on Password',
  }),
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