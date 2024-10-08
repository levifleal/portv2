"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { formSchema } from "@/interfaces/form"
import { sendEmail } from "@/serverActions/sendMail"
import { toast } from "@/hooks/use-toast"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"



export default function ContatoPage() {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const whats = `https://api.whatsapp.com/send/?phone=5519996423567&text=Olá! Vi seu currículo e gostaria de conversar sobre uma oportunidade profissional. Poderia me informar qual seria o melhor horário para entrarmos em contato?
  Atenciosamente,
  [Nome do Recrutador / Empresa]`

  async function handleSubmit(formData: { email: string; name: string; message: string; }) {
    setIsPending(true)

    try {
      const result = await sendEmail(formData)

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: result.error,
        })
      } else {
        toast({
          title: "Sucesso!",
          description: "Sua mensagem foi enviada com sucesso.",
        })
        formData
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem.",
      })
    } finally {
      setIsPending(false)
    }
  }


  return (
    <main className="container mx-auto px-4 py-12">
      <section id="contact" className="mb-24">
        <motion.h2
          className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Entre em Contato
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="Seu nome" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="seu@email.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem >
                      <FormControl>
                        <div className="relative">
                          <Textarea placeholder="Sua mensagem" {...field} rows={4} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white">
                  {isPending ? <><Loader2 className="h-5 w-5 animate-spin text-white" /> Loading...</> : <><Send className="mr-2 h-4 w-4" /> Enviar Mensagem</>}
                </Button>
              </form>
            </Form>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Informações de Contato</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/30 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">contato@levileal.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <a className="flex items-center space-x-4 group" href={whats} target="_blank" rel="noopener noreferrer">
                    <div className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/30 transition-colors duration-300">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">+55 (19) 9 9817-1308</span>
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-green-500/10 p-3 rounded-full group-hover:bg-green-500/30 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">Paulínia - São Paulo, Brasil</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}