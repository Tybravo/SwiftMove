import express from 'express';
import authRoutes from './routes/authRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';
import { authMiddleware } from './middleware/authMiddleware';
import deliveryRoutes from './routes/deliveryRoutes';
import driverRoutes from './routes/driverRoutes';

const app = express();

app.use(express.json());


// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use(authMiddleware);
app.use('/api/deliveries', authMiddleware, deliveryRoutes);
app.use('/api/drivers', authMiddleware, driverRoutes);

// Error handling
app.use(errorMiddleware);


export default app;