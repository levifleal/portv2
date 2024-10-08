'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Header() {
    const { theme, setTheme } = useTheme()
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    // Use useEffect to handle client-side rendering
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className='backdrop-blur-sm bg-zinc-900/10 dark:bg-zinc-200/5'>
            <header className="container mx-auto px-4 py-8">
                <nav className="flex justify-between items-center">
                    <motion.h1
                        className="text-3xl hover:cursor-pointer font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => router.push('/')}
                    >
                        Levi Leal
                    </motion.h1>
                    <div className="flex items-center space-x-6">
                        <a href="/about" className="hover:text-green-500 transition-colors">Sobre</a>
                        <a href="/projects" className="hover:text-green-500 transition-colors">Projetos</a>
                        <a href="/contact" className="hover:text-green-500 transition-colors">Contato</a>
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                            >
                                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </Button>
                        )}
                    </div>
                </nav>
            </header>
        </div>
    )
}