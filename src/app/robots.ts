import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/projects',
        '/projects/*', // Allow all project detail pages
        '/about',
        '/contact'
      ],
      disallow: [
        '/api/*',     // Protect API routes
        '/admin/*',   // Protect any admin sections if you have them
        '/draft/*'    // Protect draft project pages if you have them
      ]
    },
    sitemap: 'https://levileal.com/sitemap.xml', // Replace with your actual domain
    host: 'https://levileal.com'                 // Replace with your actual domain
  }
}