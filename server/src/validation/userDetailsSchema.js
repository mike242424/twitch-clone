import Joi from 'joi';

export const userDetailsSchema = Joi.object({
  userId: Joi.string().required(),
});
