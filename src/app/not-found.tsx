"use client"

import React, {  } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Página Não Encontrada | Levi Leal',
    description: 'A página que você está procurando não existe ou foi movida.',
  }

export default function NotFound() {
  return (

      <div className="relative min-h-[calc(100vh-200px)] flex flex-col justify-center items-center z-10 text-center">
        <motion.h1
          className="text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Parece que você se perdeu no código.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a Página Inicial
            </Link>
          </Button>
        </motion.div>
      </div>
  )
}