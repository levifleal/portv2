import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Footer = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-900 py-8 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            &copy; {new Date().getFullYear()} Levi Leal. Todos os direitos reservados.
                        </p>
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-end gap-4 mb-4 md:mb-0">
                        <Link href="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            Início
                        </Link>
                        <Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            Projetos
                        </Link>
                        <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            Sobre
                        </Link>
                        <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                            Contato
                        </Link>
                    </nav>
                    <div className="flex space-x-2">
                        <Button className="bg-gray-500/20 hover:bg-gray-500/40 backdrop-blur-sm" variant="outline" size="icon" asChild>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </Button>
                        <Button className="bg-gray-500/20 hover:bg-gray-500/40 backdrop-blur-sm" variant="outline" size="icon" asChild>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </Button>
                        <Button className="bg-gray-500/20 hover:bg-gray-500/40 backdrop-blur-sm" variant="outline" size="icon" asChild>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <Twitter className="h-4 w-4" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer