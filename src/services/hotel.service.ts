import type { createHotelDTO } from "../dto/hotel.dto.ts";
import { createHotel, getHotelById } from "../repositories/hotel.repository.ts";

export async function createHotelService(hotelData: createHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel;       
}

export async function getHotelByIdService(hotelId: number) {
    const hotel = await getHotelById(hotelId);
    return hotel;
}