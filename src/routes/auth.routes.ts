import { Router } from 'express';
import { registerUser, loginUser, listUsernames } from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/usernames', listUsernames);

export default router;
