import { Router } from 'express';
import { createDriver, assignDriver } from '../controllers/driverController';
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/', authMiddleware, adminMiddleware, createDriver);
router.put('/:deliveryId/assign/:driverId', authMiddleware, adminMiddleware, assignDriver);

export default router;