import { z } from 'zod'

export const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const RegisterFormSchema = z.object({
    username: z.string().min(4),
    birth: z.date().min(new Date("1930-01-01")),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
})