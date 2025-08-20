import { Router } from 'express';
import { createDelivery, getDeliveries, getDeliveriesAssigned } from '../controllers/deliveryController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createDelivery);
router.get('/', authMiddleware, getDeliveries);
router.get('/assigned', authMiddleware, getDeliveriesAssigned);

export default router;
