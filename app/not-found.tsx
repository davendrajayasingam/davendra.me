export default function NotFound()
{
    return (
        <div className='flex flex-col items-center justify-center space-y-8 min-h-[75vh]'>

            <h1 className='font-bold text-center text-amber-400 text-4xl'>
                <span className='text-8xl'>
                    😟
                </span>
                <br />
                Page Not Found
            </h1>

            <h2 className='font-medium text-lg text-center text-teal-100'>
                I suspect foul play.
            </h2>

        </div>
    )
}