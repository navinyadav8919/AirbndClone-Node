import type { NextFunction, Request, Response } from "express";
import type { createHotelDTO } from "../dto/hotel.dto.ts";
import { createHotelService, getHotelByIdService } from "../services/hotel.service.ts";

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