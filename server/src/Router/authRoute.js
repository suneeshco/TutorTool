import { Router } from 'express';
import { studentLogin, studentSignup } from '../Controllers/authController.js';

const router = Router();

router.post('/signup', studentSignup);
router.post('/login', studentLogin);

export default router;