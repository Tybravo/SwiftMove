export interface IUser {
  _id?: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  registeredAt: string; 
  businessCategory: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  role?: 'admin' | 'user';
  businessCategory: string;
}
