import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';
import { authMiddleware } from './middleware/authMiddleware';
import deliveryRoutes from './routes/deliveryRoutes';
import driverRoutes from './routes/driverRoutes';

const app = express();

// CORS configuration
app.use(
  cors({
    origin: 'http://localhost:5173', // Frontend URL (Vite default port)
    methods: ['GET', 'POST', 'PUT'],
    credentials: true,
  })
);

app.use(express.json());

// Public routes
app.use('/api/auth', authRoutes);

// Protected routes
app.use(authMiddleware);
app.use('/api/deliveries', deliveryRoutes);
app.use('/api/drivers', driverRoutes);

// Error handling
app.use(errorMiddleware);

export default app;