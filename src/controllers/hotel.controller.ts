import type { NextFunction, Request, Response } from "express";
import type { createHotelDTO } from "../dto/hotel.dto.ts";
import { createHotelService, getHotelByIdService,getAllHotelsService,updateHotelService,deleteHotelService} from "../services/hotel.service.ts";

export async function createHotelController(req:Request, res:Response,next:NextFunction) {
    
    //1. call the service layer to create a hotel
    const hotel = await createHotelService(req.body as createHotelDTO);

    //2. send the response back to client
    res.status(201).json({
        message: "Hotel created successfully",
        data: {
            id: hotel.id,
            name: hotel.name,
            address: hotel.address,
            location: hotel.location,
            createdAt: hotel.createdAt,
            updatedAt: hotel.updatedAt,
            rating: hotel.rating ?? null,
            rating_count: hotel.rating_count ?? null
        },
        success: true
    });
}

export async function getHotelByIdController(req:Request, res:Response,next:NextFunction) {
    
    //1. call the service layer to get the hotel details
    const hotel = await getHotelByIdService(Number(req.params.id));    

    //2. send the response back to client
    res.status(200).json({
        message: "Hotel details retrieved successfully",
        data: {
            id: hotel.id,
            name: hotel.name,
            address: hotel.address,
            location: hotel.location,
            createdAt: hotel.createdAt,
            updatedAt: hotel.updatedAt,
            rating: hotel.rating ?? null,
            rating_count: hotel.rating_count ?? null
        },
        success: true
    });
}

export async function getAllHotelsController(req:Request, res:Response,next:NextFunction) {
    //1. call the service layer to get the hotel details
    const hotels = await getAllHotelsService();

    //2. send the response back to client
    res.status(200).json({
        message: "Hotel details retrieved successfully",
        data: hotels,       
        success: true
    });
}   

export async function updateHotelController(req:Request, res:Response,next:NextFunction) {
    //1. call the service layer to update the hotel details
    const hotel = await updateHotelService(Number(req.params.id), req.body as createHotelDTO);  

    //2. send the response back to client
    res.status(200).json({  
        message: "Hotel details updated successfully",
        data: {
            id: hotel.id,       
            name: hotel.name,
            address: hotel.address,
            location: hotel.location,
            createdAt: hotel.createdAt,
            updatedAt: hotel.updatedAt,
            rating: hotel.rating ?? null,
            rating_count: hotel.rating_count ?? null
        },
        success: true
    });
}   

export async function deleteHotelController(req:Request, res:Response,next:NextFunction) {
    //1. call the service layer to delete the hotel
    await deleteHotelService(Number(req.params.id));    

    //2. send the response back to client
    res.status(200).json({
        message: "Hotel deleted successfully",
        success: true
    });
}   
