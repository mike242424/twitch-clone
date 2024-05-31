import Joi from 'joi';

export const changePasswordSchema = Joi.object({
  Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
  newPassword: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),
});
