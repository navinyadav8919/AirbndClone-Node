import type { createHotelDTO } from "../dto/hotel.dto.ts";
import { createHotel, getHotelById,getAllHotels,updateHotel,deleteHotel} from "../repositories/hotel.repository.ts";

export async function createHotelService(hotelData: createHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel;       
}

export async function getHotelByIdService(hotelId: number) {
    const hotel = await getHotelById(hotelId);
    return hotel;
}

export async function getAllHotelsService() {
    const hotels = await getAllHotels();
    return hotels;
}   

export async function updateHotelService(hotelId: number, hotelData: Partial<createHotelDTO>) {
    const hotel = await updateHotel(hotelId, hotelData);
    return hotel;
}

export async function deleteHotelService(hotelId: number) {
    await deleteHotel(hotelId);
}   