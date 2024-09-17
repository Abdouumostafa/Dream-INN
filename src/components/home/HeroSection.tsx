import React from 'react'
import PrimaryButton from '../PrimaryButton'
import Image from 'next/image'
import { motion } from 'framer-motion'
import heroImg from '@/assets/hero.png'

const HeroSection = () => {
   return (
      <div className="relative w-[100vw] md:h-[calc(100vh-107px)] h-[calc(100vh-93px)]" id='home'>
         <Image src={heroImg} alt="hero image" className="w-screen h-full object-cover" />
         <div className="absolute z-0 bg-[rgba(0,0,0,0.45)] top-0 left-0 w-full h-full"></div>
         <div className="absolute top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-2/3 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                  duration: 1.2,
                  delay: 0.2,
               }}
            >
               <h1 className="text-white md:text-7xl sm:text-5xl text-3xl w-full whitespace-nowrap block">
                  Discover the meaning
                  <br />
                  of a Perfect Stay
               </h1>
               <p className="text-white my-10 text-center sm:text-base text-xs">
                  Experience the calming atmosphere of
                  <br />
                  our luxurious guest rooms, each designed
                  <br />
                  with your comfort in mind.
               </p>
               <PrimaryButton
                  title='reserve your room'
                  isBorder={false}
                  className="sm:text-base text-xs"
                  href='/rooms' />
            </motion.div>
         </div>
      </div>)
}

export default HeroSection