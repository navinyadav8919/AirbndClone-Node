import express from 'express';
import {  ServerConfig } from './config/index.ts';
import { pingHandler } from './controllers/ping.controller.ts';
import pingRouter from './routers/ping.router.ts';
import type { NextFunction } from 'express-serve-static-core';
import v1Router from './routers/v1/index.router.ts';


const app = express();



app.use('/api/v1', v1Router);




app.listen(ServerConfig.PORT, () => {
    console.log(`server is running on http://localhost:${ServerConfig.PORT}`);
    console.log(`Press ctrl+c to stop the server`);
});