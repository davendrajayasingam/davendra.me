import Link from 'next/link'

const HomepageIntroduction = () =>
{
    return (
        <div className='text-theme-foreground'>

            <h1 className='font-medium text-3xl'>
                Introduction
            </h1>

            <hr className='my-3 border-gray-50 border-opacity-30' />

            <p className='text-lg'>
                {'Hello 👋, I\'m Dave, and welcome to my personal site! 🙂'}
                <br />
                <br />
                {`
                Most of my work involves creating websites, web applications, and 
                microsites for contests and promotions. I also have experience with
                gamification, and often incorporate hyper-casual games into campaigns.
                `}
                <br />
                <br />
                {`
                The theme of this website is Visual Studio Code. It is the software
                that I use on a daily basis as a programmer. You can browse all the 
                code I wrote to create this site by clicking 
                `}
                <Link
                    href='/code'
                    className='hover:underline text-theme-textLink.foreground'
                >
                    over here
                </Link>
                .
                <br />
                <br />
                {`
                I like meeting people, learning new things, and knowledge sharing.
                Feel free to reach out to me on my contact page or by clicking
                `}
                <Link
                    href='/contact'
                    className='hover:underline text-theme-textLink.foreground'
                >
                    over here
                </Link>
                .
            </p>
        </div>
    )
}

export default HomepageIntroduction