"use client"
import ApplicationWithSediSolar from '@/components/ApplicationWithSedi/ApplicationWithSediSolar'
import ContactForm from '@/components/ContactUs/ContactUs'
import GlobalPresence from '@/components/GlobalPresence/GlobalPresence'
import SediHoverCard from '@/components/MeetSedi/SediHoverCard'
import TradeShowAndFair from '@/components/TradeShow/TradeShowAndFair'
import ChallengeAward from '@/components/greenTechChallenge/ChallengeAward'
import Hero from '@/components/hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <SediHoverCard />
      <ChallengeAward />
      <ApplicationWithSediSolar />
      <TradeShowAndFair />
      <GlobalPresence />
      <ContactForm />
    </div>
  )
}
