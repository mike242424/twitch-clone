import Joi from 'joi';

export const channelSettingsSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(10).required(),
  description: Joi.string().min(10).max(200).required(),
  title: Joi.string().min(3).max(15).required(),
  avatarUrl: Joi.string().uri().required(),
});
