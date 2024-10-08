"use client"

import React, { } from "react"
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Projects } from '@/data/projects'
import { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"

type ProjectLayoutProps = {
  params: {
    slug: string
  }
}



export default function Project({ params }: ProjectLayoutProps) {
  const project = Projects.find((proj) => proj.slug === params.slug)
  if (!project) {
    notFound()
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    codeRepository: project.githubUrl,
    programmingLanguage: project.technologies,
    author: {
      "@type": "Person",
      name: "Levi Leal",
      url: "https://levileal.com"
    },
    description: project.description,
    image: project.image
  }

  return (
    <>
      <JsonLd data={projectJsonLd} />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para todos os projetos
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden bg-gray-500/20 backdrop-blur-sm">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <CardTitle className="text-3xl mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button className="bg-gray-500/20 backdrop-blur-sm" asChild variant="outline" size="icon">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">Repositório GitHub</span>
                    </Link>
                  </Button>
                  <Button className="bg-gray-200/50 backdrop-blur-sm" asChild size="icon">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Demonstração Ao Vivo</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Visão Geral do Projeto</h3>
                  <p className="text-muted-foreground">{project.fullDescription}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  )
}