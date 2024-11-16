import { Router } from 'express';
import { saveResult, getAllResults, getResultsByUser } from '../controllers/challenge.controller';

const router = Router();

router.post('/results', saveResult);
router.get('/results', getAllResults);
router.get('/results/user/:usuario', getResultsByUser);

export default router;
