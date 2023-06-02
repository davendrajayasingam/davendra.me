type Props = {
    children: React.ReactNode,
    className?: string
}

export default function Paragraph({ children, className }: Props)
{
    return (
        <h1 className={`font-sans text-xl text-teal-100 leading-relaxed ${className}`}>
            {children}
        </h1>
    )
}