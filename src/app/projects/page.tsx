"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Projects } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { ProjectCard } from "../_components/projectsCard"



export default function ProjectsPage() {
    const [filter, setFilter] = useState("")

    const filteredProjects = Projects.filter(project =>
        project.title.toLowerCase().includes(filter.toLowerCase()) ||
        project.description.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <main className="container mx-auto px-4 py-12">
            <section id="projects-header" className="mb-12">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
                        Meus Projetos
                    </h1>
                    <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
                        Explore minha coleção de projetos, desde aplicações web até experimentos criativos.
                    </p>
                </motion.div>
            </section>

            <section id="project-filter" className="mb-8">
                <div className="max-w-md mx-auto">
                    <Input
                        type="text"
                        placeholder="Filtrar projetos..."
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="w-full border-gray-300 dark:border-gray-600 focus:border-green-500 focus:ring-green-500"
                    />
                </div>
            </section>

            <section id="projects-grid" className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="contact" className="mb-24">
                <h3 className="text-3xl font-bold mb-8 text-center">Vamos Colaborar?</h3>
                <motion.div
                    className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-green-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
                        Tem um projeto em mente? Vamos conversar sobre como posso ajudar a torná-lo realidade.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Button className="bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-md" variant="outline" size="icon">
                            <Github className="h-5 w-5" />
                        </Button>
                        <Button className="bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-md" variant="outline" size="icon">
                            <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button className="bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-md" variant="outline" size="icon">
                            <Twitter className="h-5 w-5" />
                        </Button>
                        <Button className="bg-green-500 hover:bg-green-600 text-white">
                            <Mail className="h-4 w-4 mr-2" />
                            Contato
                        </Button>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}