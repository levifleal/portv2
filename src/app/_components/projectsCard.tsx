'use client'

import { Button } from '@/components/ui/button'
import { Project } from '@/interfaces/projects'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface ProjectCardProps {
  project: Project
}


export function ProjectCard({ project }: ProjectCardProps) {
  const { description, cardImage: image, title } = project
  const router = useRouter()
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-green-500 h-full flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-2">
          <Button className="bg-gray-500/30 hover:bg-gray-500/50 backdrop-blur-sm" onClick={() => router.push(`/projects/${project.slug}`)} variant="outline" size="sm">
            Ver mais
          </Button>
        </div>
      </div>
    </motion.div>
  )
}