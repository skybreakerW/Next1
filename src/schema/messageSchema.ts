import { z } from "zod"

export const messageSchema = z.object({
    content: z
    .string()
    .min(30, {message: "Content must be atleast 30 charecters"})
    .max(300, {message: "Content must be no longer than 300 charecters."})
})