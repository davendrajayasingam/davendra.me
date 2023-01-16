import
{
    IoChevronBackOutline,
    IoMenuOutline,
} from 'react-icons/io5'

type Props = {
    sidebarIsOpen: boolean,
    onToggleSidebar: () => void,
}

const ActivityBar = ({ sidebarIsOpen, onToggleSidebar }: Props) =>
{
    return (
        <nav className='p-4 flex flex-col space-y-4 bg-theme-primary z-50'>

            <button
                type='button'
                className='focus:outline-none'
                onClick={onToggleSidebar}
            >
                {
                    sidebarIsOpen
                        ? <IoChevronBackOutline className='text-4xl' />
                        : <IoMenuOutline className='text-4xl' />
                }
            </button>

        </nav>
    )
}

export default ActivityBar