import express from 'express';
import {  ServerConfig } from './config/index.ts';
import { pingHandler } from './controllers/ping.controller.ts';
import pingRouter from './routers/ping.router.ts';
import type { NextFunction } from 'express-serve-static-core';
import v1Router from './routers/v1/index.router.ts';
import v2Router from './routers/v2/index.router.ts';
import { z } from 'zod';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', v1Router);
app.use('/api/v1', v2Router);


app.listen(ServerConfig.PORT, () => {
    console.log(`server is running on http://localhost:${ServerConfig.PORT}`);
    console.log(`Press ctrl+c to stop the server`);

    // const obj ={
    //     name: "naveen",
    //     age: 21
    // };

    // const objSchema = z.object({
    //     name: z.string(),
    //     age: z.number().int().positive()

    // })

    // console.log(objSchema.parse(obj));
});