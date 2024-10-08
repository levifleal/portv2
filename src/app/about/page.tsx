"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skills } from "@/data/skills"
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Twitter, GraduationCap, Briefcase, Search, Calendar, Building } from "lucide-react"
import Link from "next/link"
import { Certificates } from "@/data/certificates"
import { Experiences } from "@/data/experiences"
import dayjs from 'dayjs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Certificate } from "@/interfaces/certificate"
import { Badge } from "@/components/ui/badge"

const CertificateCard = ({ cert }: { cert: Certificate }) => {

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="h-full"
        >
            <Card className="bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all justify-between duration-300 h-full flex flex-col overflow-hidden  ">
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">{cert.name}</CardTitle>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            {cert.skill[0]}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <Building className="mr-2 h-4 w-4" />
                        <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{cert.year}</span>
                    </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-end items-center">
                    {cert.url && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-800 dark:hover:text-green-300"
                                        asChild
                                    >
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                            <GraduationCap className="mr-2 h-4 w-4" />
                                            Ver Certificado
                                        </a>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Abrir certificado em uma nova aba</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    )
}

const CertificatesModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedSkill, setSelectedSkill] = useState("All")
    const [filteredCertificates, setFilteredCertificates] = useState<Certificate[]>([])

    useEffect(() => {
        const newFilteredCerts = Certificates.filter(cert =>
            cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.skill.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
            cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cert.year.toString().includes(searchTerm)
        )
        if (selectedSkill === 'All') {
            setFilteredCertificates(newFilteredCerts)
            return
        }

        setFilteredCertificates(newFilteredCerts.filter(cert =>
            cert.skill.includes(selectedSkill)
        ))
    }, [searchTerm, selectedSkill])

    const uniqueSkills = [
        "All",
        ...Array.from(
            new Set(
                Certificates.flatMap(cert => cert.skill)
            )
        )
    ].sort()

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[80vh] p-0 bg-zinc-200/10 backdrop-blur-lg overflow-visible">
                <DialogHeader className="p-6 pb-2">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-2xl font-bold">Todos os Certificados</DialogTitle>
                    </div>
                    <DialogDescription>Uma lista completa de todas as minhas certificações</DialogDescription>
                </DialogHeader>
                <div className="p-6 pt-2 overflow-visible">
                    <div className="flex items-center space-x-2 mb-4">
                        <Search className="text-gray-400" />
                        <Input
                            type="text"
                            placeholder="Pesquisar certificados..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow"
                        />
                    </div>
                    <ScrollArea className="h-[60vh] overflow-visible ">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {uniqueSkills.map((skill, i) => (
                                <Button
                                    key={i}
                                    variant={selectedSkill === skill ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedSkill(skill === 'All' ? 'All' : skill)}
                                >
                                    {skill}
                                </Button>
                            ))}
                        </div>
                        <AnimatePresence>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-visible">
                                {filteredCertificates.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                    >
                                        <CertificateCard cert={cert} />
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatePresence>
                        {filteredCertificates.length === 0 && (
                            <p className="text-center text-gray-500 mt-8">Nenhum certificado encontrado.</p>
                        )}
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default function AboutPage() {
    const [showAllCertificates, setShowAllCertificates] = useState(false)

    const hasExperience = Experiences.length > 0

    return (
        <main className="container mx-auto px-4 py-12">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
                    Sobre Mim
                </h1>
                <p className="text-xl text-center text-gray-700 dark:text-gray-300">
                    Desenvolvedor Front-End apaixonado por criar experiências web incríveis
                </p>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="bg-gray-500/10 h-full backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Quem Sou Eu</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center mb-6">
                                <div className="relative w-48 h-48 mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur-2xl opacity-70"></div>
                                    <img
                                        src="https://2.gravatar.com/avatar/0aa54c5449234e127cd1662e9b8b50ebdc00638602048ea2932f6d1eda7507db?size=512"
                                        alt="Levi Leal"
                                        width={192}
                                        height={192}
                                        className="relative rounded-full object-cover"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold">Levi Leal</h2>
                                <p className="text-gray-600 dark:text-gray-400">Front-End Developer</p>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Sou um desenvolvedor front-end {hasExperience ? "com experiência em" : "apaixonado por"} criar interfaces de usuário intuitivas e responsivas. Minha paixão está em transformar designs complexos em código limpo e eficiente.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button className="bg-gray-500/10 hover:bg-gray-500/30" variant="outline" size="icon" asChild>
                                                <a href="https://github.com/levifleal" target="_blank" rel="noopener noreferrer">
                                                    <Github className="h-5 w-5" />
                                                    <span className="sr-only">GitHub</span>
                                                </a>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>GitHub</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button className="bg-gray-500/10 hover:bg-gray-500/30" variant="outline" size="icon" asChild>
                                                <a href="https://linkedin.com/in/levifleal" target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="h-5 w-5" />
                                                    <span className="sr-only">LinkedIn</span>
                                                </a>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>LinkedIn</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button className="bg-gray-500/10 hover:bg-gray-500/30" variant="outline" size="icon" asChild>
                                                <a href="mailto:contato@levileal.com">
                                                    <Mail className="h-5 w-5" />
                                                    <span className="sr-only">Email</span>
                                                </a>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Email</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col"
                >
                    <Card className="flex-1 bg-gray-500/10 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Minhas Habilidades</CardTitle>
                            <CardDescription>Tecnologias e ferramentas que domino</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {Skills.map((skill) => (
                                    <Button
                                        key={skill}
                                        variant="outline"
                                        size="sm"
                                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                                    >
                                        {skill}
                                        {Certificates.find((cert) => cert.skill.includes(skill)) && (
                                            <GraduationCap className="ml-1 h-4 w-4 text-green-200" />
                                        )}
                                    </Button>
                                ))}
                            </div>
                            <Button
                                className="mt-4 bg-green-500 hover:bg-green-600 text-white"
                                onClick={() => setShowAllCertificates(true)}
                            >
                                Ver Todos os Certificados
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="mt-8 bg-gray-500/10 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle>Experiência</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {hasExperience ? (
                                <ul className="space-y-4">
                                    {Experiences.map((exp, index) => {
                                        const init = dayjs(exp.dateInit).year()
                                        const end = exp.dateEnd ? dayjs(exp.dateEnd).year() : 'Present'
                                        return (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                            >
                                                <h3 className="font-semibold text-green-900 dark:text-green-300">{exp.title}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} | {init} - {end}</p>
                                            </motion.li>
                                        )
                                    })}
                                </ul>
                            ) : (
                                <div className="text-center py-8">
                                    <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
                                    <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Sem experiência profissional</h3>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Estou ansioso para começar minha jornada profissional e aplicar minhas habilidades em projetos reais.
                                    </p>
                                    <div className="mt-6">
                                        <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                                            <Link href="/projects">
                                                Ver Meus Projetos Pessoais
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12 flex items-center justify-center text-center"
            >
                <Button className="bg-gray-500/20 hover:bg-gray-500/40 dark:text-white text-black backdrop-blur-sm" asChild>
                    <Link href="/projects">
                        Ver Meus Projetos
                    </Link>
                </Button>
                <Button onClick={() => window.open('/Cv_Levi-Leal.pdf', '_blank')} variant="outline" className="ml-4 bg-green-500/50 hover:bg-green-500/80 dark:text-white text-black backdrop-blur-sm">
                    <Download className="mr-2 h-4 w-4" /> Baixar CV
                </Button>
            </motion.div>

            <CertificatesModal isOpen={showAllCertificates} onClose={() => setShowAllCertificates(false)} />
        </main>
    )
}