import { ImSpinner } from 'react-icons/im'

export default function Loading()
{
    return (
        <div className='w-80'>
            <ImSpinner className='text-2xl text-teal-100 mx-auto animate-spin' />
            <p className='font-bold text-teal-100 text-lg text-center'>Loading ...</p>
        </div>
    )
}