import express from 'express';
import CommonController from '../../controllers/common/common.controller';

const router = express.Router()

router.get('/check', CommonController.checkHealth)

export default router;