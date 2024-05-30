import express from 'express';
import { createValidator } from 'express-joi-validation';
import { channelDetailsSchema } from '../validation/channelDetailsSchema.js';
import { getChannelById } from '../controllers/channelControllers/getChannelById.js';
import { getChannels } from '../controllers/channelControllers/getChannels.js';

const router = express.Router();

const validator = createValidator({});

router.get('/', getChannels);
router.get(
  '/:channelId',
  validator.params(channelDetailsSchema),
  getChannelById,
);

export default router;
