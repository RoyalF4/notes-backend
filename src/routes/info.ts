import { Router } from 'express';

import { GET_INFO } from '../controllers/info';

const router = Router();

router.route('/').get(GET_INFO);

export default router;
