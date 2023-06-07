import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import Title from '@/app/(ui)/Title'

type Props = {
    projects: {
        link: string,
        title: string,
        category: string,
        coverImage: StaticImageData
    }[]
}

export default function Projects({ projects }: Props)
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
                            key={project.link}
                            href={`/projects/${project.link}`}
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
                                    className='object-contain rounded-tl-xl rounded-br-xl'
                                    loading='eager'
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}