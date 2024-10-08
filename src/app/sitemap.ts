import { MetadataRoute } from 'next'
import { Projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://levileal.com' // Replace with your actual domain

  // Define main routes
  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    },
  ]

  // Generate project detail page routes
  const projectRoutes = Projects.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(), // Ideally, use the actual last modified date of each project
    changeFrequency: 'monthly' as const,
    priority: 0.9, // High priority for individual project pages
  }))

  return [...mainRoutes, ...projectRoutes]
}