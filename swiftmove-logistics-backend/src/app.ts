import express from 'express';
// import authRoutes from './routes/authRoutes';
// import deliveryRoutes from './routes/deliveryRoutes';
// import driverRoutes from './routes/driverRoutes';
// import { errorMiddleware } from './middleware/errorMiddleware';

const app = express();

app.use(express.json());

// Temporary root route for testing
app.get('/', (req, res) => {
  res.send('SwiftMove Logistics Backend');
});

// app.use('/api/auth', authRoutes);
// app.use('/api/deliveries', deliveryRoutes);
// app.use('/api/drivers', driverRoutes);

// app.use(errorMiddleware);

export default app;