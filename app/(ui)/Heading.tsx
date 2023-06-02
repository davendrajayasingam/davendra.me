type Props = {
    children: React.ReactNode,
    className?: string
}

export default function Heading({ children, className }: Props)
{
    return (
        <h1 className={`font-primary text-4xl text-teal-100 text-center ${className}`}>
            {children}
        </h1>
    )
}