'use client'

import { useState } from 'react'
import axios from 'axios'

import Button from '@/app/(ui)/Button'
import { ImSpinner } from 'react-icons/im'

export default function ContactForm()
{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')
    const [error, setError] = useState('')

    const handleSubmit = () =>
    {
        if (!name || !email || !subject || !message)
        {
            setError('Please fill in all fields')
            return
        }

        setError('')
        setStatus('submitting')

        axios.post('/api/public/sendEmail', { name, email, subject, message })
            .then(() => setStatus('submitted'))
            .catch(err =>
            {
                setError(err.message)
                setStatus('idle')
            })
    }

    return (
        <form className='max-w-xl mx-auto space-y-4'>

            <input
                type='text'
                placeholder='Name ...'
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={status !== 'idle'}
                className='block w-full bg-teal-800 text-teal-50 border-2 border-teal-100 border-opacity-50 placeholder-teal-100 placeholder-opacity-50 focus:outline-none focus:border-teal-100 focus:ring-0'
                required
            />

            <input
                type='email'
                placeholder='Email ...'
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={status !== 'idle'}
                className='block w-full bg-teal-800 text-teal-50 border-2 border-teal-100 border-opacity-50 placeholder-teal-100 placeholder-opacity-50 focus:outline-none focus:border-teal-100 focus:ring-0'
                required
            />

            <input
                type='text'
                placeholder='Subject ...'
                value={subject}
                onChange={e => setSubject(e.target.value)}
                disabled={status !== 'idle'}
                className='block w-full bg-teal-800 text-teal-50 border-2 border-teal-100 border-opacity-50 placeholder-teal-100 placeholder-opacity-50 focus:outline-none focus:border-teal-100 focus:ring-0'
                required
            />

            <textarea
                rows={5}
                placeholder='Message ...'
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={status !== 'idle'}
                className='block w-full bg-teal-800 text-teal-50 border-2 border-teal-100 border-opacity-50 placeholder-teal-100 placeholder-opacity-50 focus:outline-none focus:border-teal-100 focus:ring-0'
                required
            />

            {
                status !== 'submitted'
                && <Button
                    type='submit'
                    onClick={handleSubmit}
                    className='w-40 h-11 mx-auto'
                    disabled={status !== 'idle'}
                >
                    {
                        status === 'submitting'
                            ? <ImSpinner className='animate-spin text-xl' />
                            : 'Submit'
                    }
                </Button>
            }

            {
                error
                && <p className='my-4 p-2 w-full bg-rose-500 border-2 border-rose-100 border-opacity-50 font-medium text-rose-100 text-center'>
                    {error}
                </p>
            }

            {
                status === 'submitted'
                && <p className='my-4 p-2 w-full bg-emerald-500 border-2 border-emerald-100 border-opacity-50 font-medium text-emerald-100 text-center'>
                    Submitted! I will get back to you soonest.
                </p>
            }

        </form>
    )
}