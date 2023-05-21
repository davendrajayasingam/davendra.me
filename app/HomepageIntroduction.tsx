import Link from 'next/link'

const HomepageIntroduction = () =>
{
    return (
        <div className='text-theme-foreground'>

            <h1 className='font-medium text-3xl'>
                Introduction
            </h1>

            <hr className='my-3 border-gray-50 border-opacity-30' />

            <p className='text-lg text-justify leading-relaxed'>
                Welcome to my personal site! I'm truly delighted you stopped by. 🙂
                <br />
                <br />
                I've themed this site to mirror my true self, taking inspiration from Visual Studio Code, the software I use on a daily basis. I hope you find it enjoyable and engaging!
                <br />
                <br />
                While I possess versatility as a programmer, my true passion lies in the development of web platforms, dashboards, and microsites specifically tailored for contests and marketing campaigns. The thrill of crafting dynamic and engaging digital experiences that captivate users is what drives me forward.
                <br />
                <br />
                While you're here, feel free to check out some of the
                &nbsp;
                <Link
                    href='/projects'
                    className='hover:underline text-theme-textLink.foreground'
                >
                    exciting projects
                </Link>
                &nbsp;
                I've worked on, take a look at
                &nbsp;
                <Link
                    href='/resume'
                    className='hover:underline text-theme-textLink.foreground'
                >
                    my resume
                </Link>
                , or view the
                &nbsp;
                <Link
                    href='/code'
                    className='hover:underline text-theme-textLink.foreground'
                >
                    source code
                </Link>
                &nbsp;
                of this website to gain insight into my strengths and coding style.
                <br />
                <br />
                If you have any inquiries regarding potential collaborations, questions, or feedback, please don't hesitate to reach out to me through my
                &nbsp;
                <Link
                    href='/contact'
                    className='hover:underline text-theme-textLink.foreground'
                >
                    contact page
                </Link>
                . I would love to connect with you!
                <br />
                <br />
                Interesting tidbit: I have a background in video game development.
            </p>
        </div>
    )
}

export default HomepageIntroduction