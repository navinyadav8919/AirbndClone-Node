import { z } from 'zod';

export const hotelSchema = z.object({
    name: z.string().min(1, "Hotel name is required"),
    address: z.string().min(1, "Hotel address is required"),
    location: z.string().min(1, "Hotel location is required"),
    rating: z.number().optional(),
    rating_count: z.number().optional(),
});