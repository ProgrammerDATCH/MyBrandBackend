import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validation =(schema: Joi.ObjectSchema | Joi.ArraySchema) => async (req:Request, res:Response, next:NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ status:false, message:  error.message });
    }
    return next();
  };

  export default validation;