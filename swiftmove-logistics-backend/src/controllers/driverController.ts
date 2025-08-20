import { Request, Response } from 'express';
import Delivery from '../models/Delivery';
import Driver from '../models/Driver';
import { io } from '../server';

export const createDriver = async (req: Request, res: Response) => {
  const { name, licenseNumber } = req.body;

  if (!name || !licenseNumber) {
    return res.status(400).json({ error: 'Name and license number are required' });
  }
  try {
    const existingDriver = await Driver.findOne({ licenseNumber });
    if (existingDriver) {
      return res.status(400).json({ error: 'Driver with this license number already exists' });
    }

    const driver = new Driver({ name, licenseNumber });
    await driver.save();

    res.status(201).json({ message: 'Driver created successfully', driver });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create driver' });
  }
};


export const assignDriver = async (req: Request, res: Response) => {
  const { deliveryId, driverId } = req.params;

  if (typeof deliveryId !== 'string' || typeof driverId !== 'string') {
    return res.status(400).json({ error: 'Delivery ID and Driver ID are required' });
  }

  try {
    const delivery = await Delivery.findById(deliveryId);
    if (!delivery) {
      return res.status(404).json({ error: 'Delivery not found' });
    }

    const driver = await Driver.findById(driverId);
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }


    delivery.driverId = driverId; // TypeScript infers string, compatible with string | null
    delivery.status = 'in_transit';
    await delivery.save();

    io.emit('deliveryUpdate', { _id: delivery._id, status: delivery.status, driverId: delivery.driverId });

    res.json({ message: 'Driver assigned successfully', delivery });
  } catch (error) {
    res.status(500).json({ error: 'Failed to assign driver' });
  }
};

