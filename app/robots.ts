import { MetadataRoute } from 'next'

const BASE_URL = 'https://pitambersingh-lic.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all major search engines
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // block API routes
          '/admin',      // block admin dashboard
          '/_next/',     // block Next.js internals
        ],
      },
      {
        // Block bad bots specifically
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'DotBot',
          'MJ12bot',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}