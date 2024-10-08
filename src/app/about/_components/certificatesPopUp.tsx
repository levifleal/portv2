import React, { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Certificates } from "@/data/certificates"
import { motion, AnimatePresence } from "framer-motion"
import { X, Award, Calendar, Building } from "lucide-react"

interface CertificatePopupProps {
    skill: string
    onClose: () => void
}

export const CertificatePopup: React.FC<CertificatePopupProps> = ({ skill, onClose }) => {
    const certificate = Certificates.find((cert) => cert.skill === skill)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [onClose])

    if (!certificate) {
        return null
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                    className="w-full max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Card className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
                        <div className="w-full h-3 bg-gradient-to-r from-green-600 to-green-800" />
                        <CardHeader className="flex flex-row items-center justify-between p-6">
                            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">
                                {skill} Certificate
                            </CardTitle>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={onClose}
                                aria-label="Close"
                                className="transition-transform hover:scale-110 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row gap-8">
                                <motion.div
                                    className="w-full lg:w-1/2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={certificate.image}
                                            alt={`${skill} Certificate`}
                                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                                        />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="w-full lg:w-1/2 space-y-6"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                        <Award className="h-6 w-6 text-green-500" />
                                        <p className="text-lg">{certificate.name}</p>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                        <Building className="h-6 w-6 text-green-500" />
                                        <p className="text-lg">{certificate.issuer}</p>
                                    </div>
                                    <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                        <Calendar className="h-6 w-6 text-green-500" />
                                        <p className="text-lg">{certificate.year}</p>
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                                        View Full Certificate
                                    </Button>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}