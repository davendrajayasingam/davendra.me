import Image from 'next/image'
import Link from 'next/link'

import Title from '@/app/(ui)/Title'

import { metadata as sixidesMetadata } from '@/app/projects/sixides/page'
import { metadata as theEndMetadata } from '@/app/projects/the-end/page'
import { metadata as supermomMetadata } from '@/app/projects/supermom/page'

import sixidesCoverImage from '@/app/projects/sixides/images/sixides-cover.png'
import theEndCoverImage from '@/app/projects/the-end/images/the-end-cover.png'
import supermomCoverImage from '@/app/projects/supermom/images/supermom-cover.png'

// used in sitemap.ts
export const projects = [
    {
        slug: 'sixides',
        title: sixidesMetadata.title,
        category: 'Website',
        coverImage: sixidesCoverImage
    },
    {
        slug: 'supermom',
        title: supermomMetadata.title,
        category: 'Gamification',
        coverImage: supermomCoverImage
    },
    {
        slug: 'the-end',
        title: theEndMetadata.title,
        category: 'Gamification',
        coverImage: theEndCoverImage
    }
]

export default function Projects()
{
    return (
        <div className='max-w-xl mx-auto'>

            <Title className='my-8'>
                Projects
            </Title>

            <div className='p-4 pt-0 flex flex-col space-y-8'>
                {
                    projects.map(project => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className='max-w-xl mx-auto bg-teal-100 hover:bg-teal-50 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        >
                            <div className='px-4 pt-3 pb-2'>
                                <p className='font-medium text-sm uppercase text-amber-500 tracking-widest'>
                                    {project.category as string}
                                </p>
                                <p className='font-bold text-3xl uppercase text-teal-800'>
                                    {project.title as string}
                                </p>
                            </div>
                            <div className='pl-12'>
                                <Image
                                    src={project.coverImage}
                                    alt={project.title as string}
                                    className='rounded-tl-xl rounded-br-xl aspect-video object-cover object-center'
                                    placeholder='blur'
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}