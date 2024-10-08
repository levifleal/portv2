'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Header() {
    const { theme, setTheme } = useTheme()
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const menuItems = [
        { href: '/about', label: 'Sobre' },
        { href: '/projects', label: 'Projetos' },
        { href: '/contact', label: 'Contato' },
    ]

    return (
        <div className='backdrop-blur-sm bg-zinc-900/10 dark:bg-zinc-200/5'>
            <header className="container mx-auto px-4 py-4 md:py-8">
                <nav className="flex justify-between items-center">
                    <motion.h1
                        className="text-2xl md:text-3xl hover:cursor-pointer font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => router.push('/')}
                    >
                        Levi Leal
                    </motion.h1>
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-green-500 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                            >
                                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </Button>
                        )}
                    </div>
                    <div className="md:hidden flex items-center">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                                className="mr-2"
                            >
                                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </Button>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </nav>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden mt-4 py-4 border-t border-zinc-200 dark:border-zinc-700"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block py-2 hover:text-green-500 transition-colors"
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </header>
        </div>
    )
}