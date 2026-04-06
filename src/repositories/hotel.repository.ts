import logger from "../config/logger.config.ts";
import Hotel from "../db/models/hotel.ts";
import type { createHotelDTO } from "../dto/hotel.dto.ts";
import { NotFoundError } from "../utils/errors/app.error.ts";

export async function createHotel(hotelData: createHotelDTO) {
    const hotelDataToCreate: any = {
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
    };

    if (hotelData.rating !== undefined) {
        hotelDataToCreate.rating = hotelData.rating;
    }

    if (hotelData.rating_count !== undefined) {
        hotelDataToCreate.rating_count = hotelData.rating_count;
    }

    const hotel = await Hotel.create(hotelDataToCreate);

    logger.info(`Hotel created with id: ${hotel.id}`, { name: "Hotel Repository" });
     
    return hotel;
}

export async function getHotelById(hotelId: number) {
    const hotel = await Hotel.findByPk(hotelId);
    if (!hotel) {
        logger.error(`Hotel with id ${hotelId} not found`, { name: "Hotel Repository" });
        throw new NotFoundError(`Hotel with id ${hotelId} not found`);
    }
    logger.info(`Hotel with id ${hotelId} retrieved successfully`, { name: "Hotel Repository" });   
    return hotel;
}