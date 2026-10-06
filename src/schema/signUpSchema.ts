import { z } from "zod"


export const usernameValidation = z
    .string()
    .min(3, "Username must be atleast 3 charecters.")
    .max(16, "Username cannot be more than 16 charecters.")
    .regex(/^[a-zA-Z0-9_-]{3,16}$/, "Username should be 3 to 16 charecters with letters, digit, underscores and hyphens.")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid Email address."}),
    password: z.string().min(6,  {message: "Minimum 6 charecters"})
})