import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

import Heading from '@/app/(ui)/Heading'
import Paragraph from '@/app/(ui)/Paragraph'

type Props = {
    projects: {
        link: string,
        metadata: Metadata,
        coverImage: StaticImageData
    }[]
}

export default function Projects({ projects }: Props)
{
    return (
        <div className='max-w-xl mx-auto'>

            <Heading className='mt-8 mb-6'>
                Projects
            </Heading>

            <div className='p-4 flex flex-col space-y-8'>
                {
                    projects.map(project => (
                        <Link
                            key={project.link}
                            href={`/projects/${project.link}`}
                            className='max-w-xl mx-auto bg-teal-100 hover:bg-teal-50 rounded-xl shadow-md transition-colors duration-500 ease-in-out'
                        >
                            <div className='px-4 pt-3 pb-2'>
                                <p className='font-medium text-sm uppercase text-amber-500 tracking-widest'>
                                    {project.metadata.category as string}
                                </p>
                                <p className='font-bold text-3xl uppercase text-teal-800'>
                                    {project.metadata.title as string}
                                </p>
                            </div>
                            <div className='pl-12'>
                                <Image
                                    src={project.coverImage}
                                    alt={project.metadata.title as string}
                                    className='object-contain rounded-tl-xl rounded-br-xl'
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}