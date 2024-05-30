import express from 'express';
import { createValidator } from 'express-joi-validation';
import { verifyToken } from '../middleware/authMiddleware.js';
import { getChannelSettings } from '../controllers/settingsControllers/getChannelSettings.js';

const router = express.Router();

const validator = createValidator({});

router.get('/channel', verifyToken, getChannelSettings);

export default router;
