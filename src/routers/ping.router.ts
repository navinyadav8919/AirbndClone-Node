import express from 'express';
import { pingHandler } from '../controllers/ping.controller.ts';

const pingRouter =express.Router();

pingRouter.get('/',pingHandler);

export default pingRouter;