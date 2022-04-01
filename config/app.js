import express from 'express';
import dotenv from 'dotenv';
import { Routes } from '../routes/routes.js';
import { Database } from './database.js';
import cors from 'cors';
import http from 'http';
import {socket_io} from "./socket.js";

dotenv.config();

class App {
app = express.application;
routes = new Routes();
db = new Database();
Http = null;
socket = new socket_io;

constructor(){
    this.initializeApp();
    this.Http = http.createServer(this.app);
    this.socket.startSocket(this.Http);
}

async initializeApp() {
    this.app = express();
    this.config();
    await this.database();
    this.routes.routes(this.app);

}
config() {
    this.app.use(cors({origin:"*"}));
this.app.use (
    express.urlencoded({
        extended: true
    }));
    this.app.use(express.json())
}

async database() {
    let connection = await this.db.connection();
    console.log(connection.message)
}

}


export default new App();