export function classNames(...classes: Array<string>)
{
    return classes.filter(Boolean).join(' ')
}

export const buttonClassName = classNames(
    'px-6 py-2 rounded-full shadow-md',
    'flex items-center justify-center space-x-1',
    'bg-amber-500 hover:bg-amber-400',
    'font-medium text-amber-100',
    'transition-colors duration-500 ease-in-out',
    'focus:outline-none',
)