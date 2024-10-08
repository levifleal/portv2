import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2, {
        message: "O nome deve ter pelo menos 2 caracteres.",
    }),
    email: z.string().email({
        message: "Por favor, insira um endereço de e-mail válido.",
    }),
    message: z.string().min(10, {
        message: "A mensagem deve ter pelo menos 10 caracteres.",
    }),
})