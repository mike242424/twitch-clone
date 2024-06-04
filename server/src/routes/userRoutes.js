import express from 'express';
import { createValidator } from 'express-joi-validation';
import { verifyToken } from '../middleware/authMiddleware.js';
import { getUserDetails } from '../controllers/userControllers/getUserDetails.js';

const router = express.Router();

const validator = createValidator({});

router.get('/details', verifyToken, getUserDetails);

export default router;
