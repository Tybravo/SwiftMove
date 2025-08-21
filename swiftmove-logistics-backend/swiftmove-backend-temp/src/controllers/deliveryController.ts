import { Request, Response } from 'express';
import Delivery from '../models/Delivery';
import { IDelivery } from '../types/delivery';
import { io } from '../server';

export const createDelivery = async (req: Request, res: Response) => {
  const { customerName, pickupAddress, destination, status }: IDelivery = req.body;

  if (!customerName || !pickupAddress || !destination) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const delivery = new Delivery({ customerName, pickupAddress, destination, status: status || 'pending' });
    await delivery.save();
    io.emit('deliveryUpdate', { _id: delivery._id, status: delivery.status });
    res.status(201).json(delivery);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create delivery' });
  }
};


export const getDeliveries = async (req: Request, res: Response) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch deliveries as it seems no delivery has been registered' });
  }
};


export const getDeliveriesAssigned = async (req: Request, res: Response) => {
  try {
    const deliveries = await Delivery.find({ driverId: { $ne: null } }).populate('driverId', 'name licenseNumber');

    if (!deliveries.length) {
      return res.status(404).json({ error: 'No deliveries with assigned drivers found' });
    }

    res.json(deliveries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch assigned deliveries' });
  }
};
