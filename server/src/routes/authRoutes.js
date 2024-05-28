import express from 'express';
import Joi from 'joi';
import { createValidator } from 'express-joi-validation';

import { postLogin } from '../controllers/controllers.js';
import { postRegister } from '../controllers/controllers.js';

import { registerSchema } from '../validation/registerSchema.js';
import { loginSchema } from '../validation/loginSchema.js';

const router = express.Router();

const validator = createValidator({});

router.post('/register', validator.body(registerSchema), postRegister);

router.post('/login', validator.body(loginSchema), postLogin);

export default router;
