'use server'

import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { ContactEmail } from '@/emails/contactMail'

// Schema de validação
const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' }),
});

type FormData = z.infer<typeof formSchema>;

// Configuração do transportador do Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(data: FormData) {
  try {
    // Validação dos dados
    const validatedData = formSchema.parse(data);

    const emailHtml = await render(
      ContactEmail(validatedData)
    )

    // Envia o email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `Nova mensagem de contato de ${validatedData.name}`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    if (error instanceof z.ZodError) {
      return { error: 'Dados inválidos. Por favor, verifique os campos.' };
    }
    return { error: 'Falha ao enviar mensagem. Tente novamente mais tarde.' };
  }
}
