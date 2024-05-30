import express from 'express';
import { createValidator } from 'express-joi-validation';
import { verifyToken } from '../middleware/authMiddleware.js';
import { getChannelSettings } from '../controllers/settingsControllers/getChannelSettings.js';
import { updateChannelSettings } from '../controllers/settingsControllers/updateChannelSettings.js';
import { channelSettingsSchema } from '../validation/channelSettingsSchema.js';

const router = express.Router();

const validator = createValidator({});

router.get('/channel', verifyToken, getChannelSettings);
router.put(
  '/channel',
  verifyToken,
  validator.body(channelSettingsSchema),
  updateChannelSettings,
);

export default router;
