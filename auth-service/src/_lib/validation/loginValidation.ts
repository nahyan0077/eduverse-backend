import Joi from 'joi'

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) 
    .required()
    .pattern(/^\S*$/, 'Email must not contain spaces')
    .messages({
      'string.email': 'Invalid email format',
      'any.required': 'Email is required',
      'string.pattern.base': 'Email must not contain spaces'
    }),
  password: Joi.string()
    .min(6)
    .required()
    .pattern(/^\S*$/, 'Password must not contain spaces')
    .messages({
      'string.min': 'Password must be at least 6 characters',
      'any.required': 'Password is required',
      'string.pattern.base': 'Password must not contain spaces'
    })
});

