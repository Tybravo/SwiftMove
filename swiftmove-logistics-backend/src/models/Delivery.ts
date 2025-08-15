import mongoose, { Schema } from 'mongoose';
import { IDelivery } from '../types/delivery';
import Driver from './Driver';

const deliverySchema = new Schema<IDelivery>({
  customerName: { type: String, required: true },
  pickupAddress: { type: String, required: true },
  destination: { type: String, required: true },
  status: { type: String, enum: ['pending', 'in_transit', 'delivered'], default: 'pending' },
  driverId: { type: Schema.Types.ObjectId, ref: 'Driver', default: null },
}, { timestamps: true });

export default mongoose.model<IDelivery>('Delivery', deliverySchema);
