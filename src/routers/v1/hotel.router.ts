import express from "express";
import { createHotelController } from "../../controllers/hotel.controller.ts";
import { getHotelByIdController } from "../../controllers/hotel.controller.ts";
import { validateRequestBody } from "../../validators/index.ts";
import { hotelSchema } from "../../validators/hotel.validator.ts";

const hotelRouter = express.Router();

hotelRouter.post("/",
    validateRequestBody(hotelSchema),createHotelController);

hotelRouter.get("/:id", getHotelByIdController);

export default hotelRouter;