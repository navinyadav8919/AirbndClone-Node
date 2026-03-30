import express from 'express';
import {  ServerConfig } from './config/index.ts';
import { pingHandler } from './controllers/ping.controller.ts';
import pingRouter from './routers/ping.router.ts';
import type { NextFunction } from 'express-serve-static-core';


const app = express();



app.use(pingRouter);




app.listen(ServerConfig.PORT, () => {
    console.log(`server is running on http://localhost:${ServerConfig.PORT}`);
    console.log(`Press ctrl+c to stop the server`);
});