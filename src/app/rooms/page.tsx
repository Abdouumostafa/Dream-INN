"use client"
import { numberOfNightsState } from '@/atoms/nightsNumber.atom'
import HeroSection from '@/components/rooms/HeroSection'
import RoomsSection from '@/components/rooms/RoomsSection'
import Layout from '@/layouts/Layout'
import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRecoilValue } from 'recoil'

const page = () => {
   const queryClient = new QueryClient();
   const [clickedSearch, setClickedSearch] = useState(false)

   const scrollToNextSection = () => {
      window.scrollBy({
         top: window.innerHeight,
         behavior: 'smooth'
      });
   };

   const numberOfNights = useRecoilValue(numberOfNightsState);

   return (
      <QueryClientProvider client={queryClient}>
         <Layout>
            <main>
               <HeroSection
                  onSearchClick={() => {
                     setClickedSearch(true)
                     setTimeout(() => { scrollToNextSection() }, 1000)
                  }}
               />
               {clickedSearch ?
                  <RoomsSection
                     numberOfNights={numberOfNights}
                  />
                  :
                  ''}
            </main>
         </Layout>
      </QueryClientProvider>
   )
}

export default page