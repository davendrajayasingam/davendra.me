import Image from 'next/image'
import Link from 'next/link'

import Project from '@/app/projects/Project'
import Paragraph from '@/app/(ui)/Paragraph'
import Heading from '@/app/(ui)/Heading'
import ExternalLink from '@/app/(ui)/ExternalLink'

import coverImage from '@/app/projects/salam-lebaran/images/salamlebaran-cover.png'
import loginImage from '@/app/projects/salam-lebaran/images/salamlebaran-login.png'
import questsImage from '@/app/projects/salam-lebaran/images/salamlebaran-quests.png'
import rewardsImage from '@/app/projects/salam-lebaran/images/salamlebaran-rewards.png'
import rewardsClaimImage from '@/app/projects/salam-lebaran/images/salamlebaran-rewards-claim.png'
import redeemImage from '@/app/projects/salam-lebaran/images/salamlebaran-redeem.png'
import dashboardImage from '@/app/projects/salam-lebaran/images/salamlebaran-dashboard.png'
import dashboardCheckinImage from '@/app/projects/salam-lebaran/images/salamlebaran-dashboard-checkin.png'
import dashboardParticipantsImage from '@/app/projects/salam-lebaran/images/salamlebaran-dashboard-participants.png'
import dashboardLuckyDrawImage from '@/app/projects/salam-lebaran/images/salamlebaran-dashboard-luckydraw.png'
import dashboardLuckyDrawImage2 from '@/app/projects/salam-lebaran/images/salamlebaran-dashboard-luckydraw-2.png'
import dashboardConfigImage from '@/app/projects/salam-lebaran/images/salamlebaran-dashboard-config.png'

const metadataTitle = 'Maxis Salam Lebaran'
const metadataDescription = 'The Salam Lebaran campaign was launched by Maxis for an internal open house event during Hari Raya 2023.'

export const metadata = {
  title: metadataTitle,
  description: metadataDescription,
  category: 'Project',
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://davendra.me/projects/salam-lebaran'
  }
}

export default async function Page()
{
  return <Project
    title={metadata.title}
    description={metadata.description}
    coverImage={coverImage}
  >
    <div className='mt-8 max-w-screen-xl mx-auto flex flex-col space-y-8'>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        I was contracted by a creative agency to develop a system comprising of quests and rewards.
        <br />
        <br />
        The term 'Salam' is a Malay word that means 'greeting'. The term 'Lebaran' is a popular Islamic term for the Eid al-Fitr festival. Combined, it means 'Eid Greetings'.
      </Paragraph>

      <Heading>
        User Journey
      </Heading>

      <Image
        src={loginImage}
        alt='Login'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The participants are preregistered, and were given a QR code to scan to access the platform. They login by entering their email address in the welcome screen.
      </Paragraph>

      <Heading>
        Quests
      </Heading>

      <Image
        src={questsImage}
        alt='Quests'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Once logged in, they are shown a series of quests that they can complete. There are many booths at this event. To complete a quest, they need to find the booth for each quest, complete an activity specified at the booth, and upon completion, scan a QR code provided by the booth assistant.
        <br />
        <br />
        After that, they are shown a screen that confirms that they have completed the quest, and they can click the 'Redeem' button to claim their reward.
      </Paragraph>

      <Heading>
        Rewards
      </Heading>

      <Image
        src={rewardsImage}
        alt='Rewards'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The quests are designed to encourage the participants to visit all the booths at the event. In return, each completed quest allows participants to claim an extra ticket for a lucky draw held at multiple intervals throughout the event.
      </Paragraph>

      <Image
        src={rewardsClaimImage}
        alt='Rewards Claim'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Participants can also claim a door gift reward. This reward does not require them to complete any quests. They can claim it by clicking the 'Redeem' button at the prize redemption counter.
      </Paragraph>

      <Image
        src={redeemImage}
        alt='Redeem'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        Each reward can only be claimed once. The system keeps track of the rewards that have been claimed by each participant to prevent abuse.
      </Paragraph>

      <Heading>
        Dashboard
      </Heading>

      <Image
        src={dashboardImage}
        alt='Dashboard'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The dashboard provides many options for the event organizers to manage the event. One option is the ability to scan QR codes to check-in participants. Only participants that have checked in can complete quests, claim rewards, and participate in the lucky draw.
      </Paragraph>

      <Image
        src={dashboardCheckinImage}
        alt='Check In'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The organizers can scan the QR code by using the camera in the 'Scan' tab, or by searching for a participant in the 'Search' tab.
      </Paragraph>

      <Image
        src={dashboardParticipantsImage}
        alt='Participants'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The organizers can also view all the participants that have checked in, their progress in completing quests, the rewards they have claimed, and export the list as a CSV file.
      </Paragraph>

      <Heading>
        Lucky Draw
      </Heading>

      <Image
        src={dashboardLuckyDrawImage}
        alt='Lucky Draw'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        A lucky draw session can be triggered from the 'Lucky Draw' tab. A list of all the participants that have checked in will be shown, and the organizers can click the 'Launch' button to start a lucky draw.
      </Paragraph>

      <Image
        src={dashboardLuckyDrawImage2}
        alt='Lucky Draw'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The lucky draw mechanics are simple; once a user has won, they cannot win again. A user with multiple tickets will have their name appear multiple times in the list, increasing their chances of winning.
        <br />
        <br />
        The lucky draw wheel is inspired from the televison show The Price Is Right. The wheel can support millions of names, and will loop infinitely until the organizers click the 'Stop' button.
        <br />
        <br />
        Once the wheel stops spinning, the winner's name will be shown, and the organizers can click the 'Next' button to continue to the next draw.
      </Paragraph>

      <Heading>
        CMS
      </Heading>

      <Image
        src={dashboardConfigImage}
        alt='CMS'
        placeholder='blur'
      />

      <Paragraph className='px-4 max-w-xl mx-auto'>
        The creative agency also requested for a CMS to manage the content of the platform. It was important to them that they could update the content of the platform on the day of, and throughout the event. This is because the names of the account managers, quests, and rewards were subject to change.
        <br />
        <br />
        You may check out a <ExternalLink href='https://preview.maxissalamlebaran.com.my'>demo of the platform here</ExternalLink>. Use 'user1@email.com' to login. Get in touch with me on my <Link href='/contact' className='text-amber-400 underline'>contact page</Link> if you'd like to see a demo of the dashboard, or run you through the flow.
      </Paragraph>

      <Heading>
        Conclusion
      </Heading>

      <Paragraph className='px-4 max-w-xl mx-auto'>
        This was a complex project that required me to develop a system that could handle a large number of users, and with gamification features. I had to ensure that the system was secure, and that the data was protected.
        <br />
        <br />
        The event went smoothly, and the participants enjoyed the experience. The organizers were happy with the results, and the creative agency reused this platform for another event.
      </Paragraph>

    </div>
  </Project>
}