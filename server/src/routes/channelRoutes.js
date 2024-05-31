import express from 'express';
import { createValidator } from 'express-joi-validation';
import { channelDetailsSchema } from '../validation/channelDetailsSchema.js';
import { getChannelById } from '../controllers/channelControllers/getChannelById.js';
import { getChannels } from '../controllers/channelControllers/getChannels.js';
import { verifyToken } from '../middleware/authMiddleware.js';
import { followChannel } from '../controllers/channelControllers/followChannel.js';

const router = express.Router();

const validator = createValidator({});

router.get('/', getChannels);

router.get(
  '/:channelId',
  validator.params(channelDetailsSchema),
  getChannelById,
);

router.post(
  '/follow',
  verifyToken,
  validator.body(channelDetailsSchema),
  followChannel,
);

export default router;
