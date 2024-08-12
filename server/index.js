import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './src/routes/authRoutes.js';
import channelRoutes from './src/routes/channelRoutes.js';
import settingsRoutes from './src/routes/settingsRoutes.js';
import { registerSocketServer } from './src/io/io.js';

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

const corsOptions = {
  origin: 'https://twitch-clone-client-blond.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/settings', settingsRoutes);

const server = http.createServer(app);
registerSocketServer(server);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Database connection failed. Server not started', err);
  });
