import express from 'express';
import { createValidator } from 'express-joi-validation';
import { registerSchema } from '../validation/registerSchema.js';
import { loginSchema } from '../validation/loginSchema.js';
import { postRegister } from '../controllers/authControllers/postRegister.js';
import { postLogin } from '../controllers/authControllers/postLogin.js';

const router = express.Router();

const validator = createValidator({});

router.post('/register', validator.body(registerSchema), postRegister);

router.post('/login', validator.body(loginSchema), postLogin);

export default router;
