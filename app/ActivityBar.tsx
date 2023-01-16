import 
{
    VscComment,
    VscFilePdf,
    VscFiles,
    VscHome,
} from 'react-icons/vsc'

import { classNames } from '@/utils/helperFunctions'

type Props = {
    selectedTab: ActivityBarTab,
    onChangeTab: (tab: ActivityBarTab) => void,
}

const ActivityBar = ({ selectedTab, onChangeTab }: Props) =>
{
    const displayActivityBarButtonHelper = (tab: ActivityBarTab, Icon: React.ElementType) =>
    (
        <button
            type='button'
            className={classNames(
                'flex items-center justify-center w-full h-full px-2 py-4 focus:outline-none',
                selectedTab === tab ? 'border-b-2 sm:border-b-0 sm:border-l-2 border-theme-activityBar.foreground' : '',
            )}
            onClick={() => onChangeTab(tab)}
        >
            <Icon className='text-4xl text-theme-activityBar.foreground' />
        </button>
    )

    return (
        <nav className={classNames(
            'flex items-center w-full h-full',
            'flex-row justify-evenly',
            'md:flex-col md:justify-start md:min-h-screen',
            'border-r-2 border-theme-activityBar.border',
            'bg-theme-activityBar.background',
        )}>

            {displayActivityBarButtonHelper('home', VscHome)}

            {displayActivityBarButtonHelper('explorer', VscFiles)}

            {displayActivityBarButtonHelper('resume', VscFilePdf)}

            {displayActivityBarButtonHelper('contact', VscComment)}

        </nav>
    )
}

export default ActivityBar