export function classNames(...classes: Array<string>)
{
    return classes.filter(Boolean).join(' ')
}

export const buttonClassName = classNames(
    'px-4 py-2 rounded-md shadow-md',
    'flex items-center justify-center space-x-1',
    'bg-theme-button.background hover:bg-theme-button.hoverBackground',
    'font-medium text-theme-button.foreground',
    'transition-colors duration-500 ease-in-out',
    'focus:outline-none',
)