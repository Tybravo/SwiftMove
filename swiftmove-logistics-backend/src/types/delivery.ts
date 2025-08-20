export interface IDelivery {
  _id?: string;
  customerName: string;
  pickupAddress: string;
  destination: string;
  status: 'pending' | 'in_transit' | 'delivered';
  driverId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

