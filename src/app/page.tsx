"use client"

import React, {  } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Projects } from "@/data/projects"
import { ProjectCard } from "./_components/projectsCard"
import { Skills } from "@/data/skills"

export default function Home() {
  return (
        <main className="container mx-auto px-4 py-12">
          <section id="about" className="mb-24 h-[50vh] flex flex-col justify-center ">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
                  Front-End Developer
                </h2>
                <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                  Desenvolvendo soluções web inovadoras, com foco em experiências do usuário, acessibilidade e performance, sempre atualizado com as últimas tecnologias e tendências de design.
                </p>
                <div className="flex space-x-4">
                  <Button className="bg-gray-500/10 hover:bg-gray-500/30 backdrop-blur-sm" variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button className="bg-gray-500/10 hover:bg-gray-500/30 backdrop-blur-sm" variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button className="bg-gray-500/10 hover:bg-gray-500/30 backdrop-blur-sm" variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-2xl opacity-70"></div>
                  <img
                    src="https://2.gravatar.com/avatar/0aa54c5449234e127cd1662e9b8b50ebdc00638602048ea2932f6d1eda7507db?size=512"
                    alt="Levi Leal Gravatar Image"
                    className="relative rounded-full w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          <section id="skills" className="mb-24">
            <h3 className="text-3xl font-bold mb-8 text-center">Habilidades & Tecnologias</h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {Skills.map((skill) => (
                <span key={skill} className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-500">
                  {skill}
                </span>
              ))}
            </motion.div>
          </section>

          <section id="projects" className="mb-24">
            <h3 className="text-3xl font-bold mb-8 text-center">Projetos Destacados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Projects.map((project, index) => {
                if (!project.highlight) {
                  return null
                }
                return (
                  <ProjectCard key={index} project={project} />
                )
              })}
            </div>
          </section>
        </main>
  )
}