import { NextRequest, NextResponse } from 'next/server'
import vCardsJS from 'vcards-js'

export async function GET(request: NextRequest)
{
  //create a new vCard
  const vCard = vCardsJS()

  //set properties
  vCard.firstName = 'Davendra'
  vCard.lastName = 'Jayasingam'
  vCard.email = process.env.PERSONAL_EMAIL!
  vCard.cellPhone = process.env.PERSONAL_MOBILE!

  const res = new NextResponse(vCard.getFormattedString())
  res.headers.set('Content-Type', 'text/vcard; name="davendra.vcf"')
  res.headers.set('Content-Disposition', 'inline; filename="davendra.vcf"')

  return res
}