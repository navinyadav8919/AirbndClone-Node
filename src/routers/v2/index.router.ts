import express from 'express';
import pingRouter from '../ping.router.ts';

const v2Router = express.Router();

v2Router.use('/ping1',pingRouter);

export default v2Router;