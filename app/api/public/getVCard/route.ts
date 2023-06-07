import { NextRequest, NextResponse } from 'next/server'
import vCardsJS from 'vcards-js'

import profilePicture from '@/app/images/davendra.png'

export async function GET(request: NextRequest)
{
  //create a new vCard
  const vCard = vCardsJS()

  //set properties
  vCard.firstName = 'Davendra'
  vCard.lastName = 'Jayasingam'
  vCard.email = process.env.PERSONAL_EMAIL!
  vCard.photo.attachFromUrl(profilePicture.src, 'PNG')
  vCard.title = 'Full-Stack Web Developer'
  vCard.url = 'https://davendra.me'
  vCard.nickname = 'Dave'
  vCard.socialUrls.facebook = 'https://www.facebook.com/davendra'
  vCard.socialUrls.linkedIn = 'https://www.linkedin.com/in/davendra-jayasingam/'
  vCard.socialUrls.instagram = 'https://www.instagram.com/davendra.me/'
  // vCard.cellPhone = process.env.PERSONAL_MOBILE!


  // https://stackoverflow.com/questions/71192991/social-media-links-appear-broken-in-vcf-format
  let vCardString = vCard.getFormattedString()
  vCardString = vCardString.replace(/SOCIALPROFILE;CHARSET=UTF-8;/gm, 'SOCIALPROFILE;')
  
  const res = new NextResponse(vCardString)
  res.headers.set('Content-Type', 'text/vcard; name="davendra.vcf"')
  res.headers.set('Content-Disposition', 'inline; filename="davendra.vcf"')

  return res
}