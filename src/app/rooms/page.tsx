"use client"
import { numberOfNightsSelector } from '@/atoms/nightsNumber.atom'
import HeroSection from '@/components/rooms/HeroSection'
import RoomsSection from '@/components/rooms/RoomsSection'
import Layout from '@/layouts/Layout'
import React from 'react'
import { useRecoilValue } from 'recoil'

const Page = () => {

   const scrollToNextSection = () => {
      window.scrollBy({
         top: window.innerHeight,
         behavior: 'smooth'
      });
   };

   const numberOfNights = useRecoilValue(numberOfNightsSelector);

   return (
      <Layout>
         <main className='overflow-y-scroll'>
            <HeroSection
               onSearchClick={() => scrollToNextSection()}
            />
            <RoomsSection
               numberOfNights={numberOfNights}
            />
         </main>
      </Layout>
   )
}

export default Page