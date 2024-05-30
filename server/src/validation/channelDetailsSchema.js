import Joi from 'joi';

export const channelDetailsSchema = Joi.object({
  channelId: Joi.string().required(),
});
