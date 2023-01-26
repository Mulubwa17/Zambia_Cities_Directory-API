import express from 'express';
import { forgotPassword, resetPassword, setPassword, signIn } from '../controllers/auth';
// import { checkAuthToken } from '../utils/jwtMiddleware';



const router = express.Router();

router.post('/set_password', setPassword);

router.post('/login',signIn);

router.post('/forgot_password',  forgotPassword);

router.post('/reset_password', resetPassword);

export { router as authRoutes };