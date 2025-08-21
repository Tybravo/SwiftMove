import mongoose, { Schema } from 'mongoose';
import { IDriver } from '../types/driver';

const driverSchema = new Schema<IDriver>({
  name: { type: String, required: true },
  licenseNumber: { type: String, required: true, unique: true },
  registeredAt: {
    type: String,
    default: () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos', // WAT timezone
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      return new Intl.DateTimeFormat('en-US', options)
        .format(now)
        .replace(/, /, ', '); // Ensure the format is "MM/DD/YYYY, HH:MM AM/PM"
    },
  },
  
});

export default mongoose.model<IDriver>('Driver', driverSchema);
