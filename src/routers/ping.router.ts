import express from 'express';
import { pingHandler } from '../controllers/ping.controller.ts';
import { validateQueryParams, validateRequestBody } from '../validators/index.ts';
import { pingSchema } from '../validators/ping.validator.ts';

const pingRouter =express.Router();

function checkBody(req: express.Request,res:express.Response,next:express.NextFunction):void{
    if(typeof req.body.name !== "string"){
        res.status(400);
        res.send("Bad Request");
    }
    next();
}
pingRouter.get('/',validateRequestBody(pingSchema),pingHandler);

pingRouter.get('/health', (req,res) =>{
    res.status(200).send('OK');
});

export default pingRouter;