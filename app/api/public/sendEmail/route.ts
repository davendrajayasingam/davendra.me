import { NextRequest, NextResponse } from 'next/server'
import Validator, { ValidationSchema } from 'fastest-validator'

import { sendEmail } from '@/utils/nodemailerHelper'

const schema: ValidationSchema = {
    $$strict: 'remove',
    name: 'string|min:1|trim:true',
    email: 'email',
    subject: 'string|min:1|trim:true',
    message: 'string|min:1|trim:true'
}

export async function POST(request: NextRequest)
{
    const body = await request.json()

    const v = new Validator()
    const check = v.compile(schema)
    const validationResponse = check(body)
    if (validationResponse !== true)
    {
        return NextResponse.json({ message: 'Invalid input!' }, { status: 400 })
    }

    const { name, email, subject, message } = body

    await sendEmail({
        to: ['hello@davendra.me'],
        subject: subject,
        replyTo: email,
        text: `${name} says: ${message}`
    })

    return NextResponse.json({ message: 'Sent!' })
}