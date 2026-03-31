import {z} from "zod";

export const pingSchema =z.object({
    message: z.string().min(1)
})

// export const queryParamsSchema = z.object({
//     message:
// })