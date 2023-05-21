import HomepageBanner from '@/app/HomepageBanner'
import { classNames } from '@/utils/helperFunctions'
import HomepageIntroduction from './HomepageIntroduction'
import HomepageWorkExperience from './HomepageWorkExperience'
import HomepageTechStack from './HomepageTechStack'
import HomepageSkills from './HomepageSkills'

const Homepage = () =>
{
    const menuSelection = ['Introduction', 'Work Experience', 'Tech Stack']

    const displayMenu = (name: string) => (
        <a
            href={`#${name}`}
            className='text-theme-textLink.foreground hover:underline'
        >
            {name}
        </a>
    )

    return (
        <div className={classNames(
            'w-screen max-w-screen-lg mx-auto p-4',
            'flex flex-col space-y-8',
        )}>

            <HomepageBanner />

            {/* Menu */}
            <div>
                <div className={classNames(
                    'flex flex-row space-x-4 justify-center md:justify-start',
                    'font-bold text-theme-foreground text-lg',
                )}>
                    {menuSelection.map(menuItem => displayMenu(menuItem))}
                </div>
                <hr className='mt-3 border-gray-50 border-opacity-30' />
            </div>

            <div id={`${menuSelection[0]}`}>
                <HomepageIntroduction />
                <HomepageSkills />
            </div>

            <div id={`${menuSelection[1]}`}>
                <HomepageWorkExperience />
            </div>

            <div id={`${menuSelection[2]}`}>
                <HomepageTechStack />
            </div>

        </div>
    )
}

export default Homepage