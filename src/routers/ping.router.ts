import express from 'express';
import { pingHandler } from '../controllers/ping.controller.ts';

const pingRouter =express.Router();

function middleware1(req: Request , res:Response,next:NextFunction){
    console.log('Middleware 1');
    next();
}

function middleware2(req: Request , res:Response,next:NextFunction){
    console.log('Middleware 2');
    next();
}


pingRouter.get('/ping',middleware1,middleware2,pingHandler);

export default pingRouter;