import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/auth';

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
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

export default mongoose.model<IUser>('User', userSchema);
