import express from "express";
import { createHotelController, deleteHotelController, updateHotelController, getAllHotelsController } from "../../controllers/hotel.controller.ts";
import { getHotelByIdController } from "../../controllers/hotel.controller.ts";
import { validateRequestBody } from "../../validators/index.ts";
import { hotelSchema } from "../../validators/hotel.validator.ts";

const hotelRouter = express.Router();

hotelRouter.post("/",
    validateRequestBody(hotelSchema),createHotelController);

hotelRouter.get("/:id", getHotelByIdController);

hotelRouter.get("/", getAllHotelsController);

hotelRouter.put("/:id", validateRequestBody(hotelSchema), updateHotelController);

hotelRouter.delete("/:id", deleteHotelController);

export default hotelRouter;