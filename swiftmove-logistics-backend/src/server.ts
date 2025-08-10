import { Server } from 'socket.io';
import http from 'http';
import app from './app';
import { connectDB } from './config/db';
import { setupSockets } from './sockets/deliverySocket';
import { env } from './config/env';

const server = http.createServer(app);
export const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT'],
  },
});

connectDB();

setupSockets(io);

server.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});

