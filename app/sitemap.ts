import { MetadataRoute } from 'next'

import { projects } from '@/app/projects/Projects'

export default function sitemap(): MetadataRoute.Sitemap 
{
    return [
        {
            url: 'https://davendra.me',
            lastModified: new Date()
        },
        {
            url: 'https://davendra.me/resume',
            lastModified: new Date()
        },
        {
            url: 'https://davendra.me/contact',
            lastModified: new Date()
        },
        {
            url: 'https://davendra.me/projects',
            lastModified: new Date()
        },
        ...projects.map(project => ({
            url: `https://davendra.me/projects/${project.slug}`,
            lastModified: new Date()
        }))
    ]
}