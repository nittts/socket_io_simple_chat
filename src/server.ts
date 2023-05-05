import express from "express";
import http from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";
dotenv.config();

const app = express();

const server = http.createServer(app);

const ioServer = new Server(server);

export { app, server, ioServer };
