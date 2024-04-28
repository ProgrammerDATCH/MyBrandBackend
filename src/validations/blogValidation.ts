import Joi from 'joi';

const idRegex = /^[0-9a-fA-F]{24}$/;

const editBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

const newBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required().pattern(/^data:image\/(png|jpeg);base64,/).messages({
    'string.pattern.base': 'Please provide base64 image string',
  })
});

const deleteBlog = Joi.object({
  id: Joi.string().pattern(idRegex).required()
});

export default { newBlog, editBlog, deleteBlog };