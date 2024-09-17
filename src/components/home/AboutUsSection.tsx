"use client"
import React, { useEffect } from 'react'
import aboutUs from '@/assets/home/aboutUs.png'
// @ts-expect-error it is not important
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const AboutUsSection = () => {

   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);

   return (
      <div className='lg:my-28 my-14 px-[5%] flex lg:flex-row flex-col-reverse items-center gap-24' id='about'>
         <div className="sm:ml-8 ml-0 flex-1" data-aos="fade-right">
            <h2 className='sm:text-3xl text-2xl font-semibold'>Welcome to Dream Inn</h2>
            <div className="text-[#00000080] sm:text-sm text-xs">
               <p className="my-6">Welcome to Dream Inn, where luxury and convenience converge in the heart of the city. Our hotel is located in the bustling city center, just steps away from one of the seven wonders of the world, the pyramids of Giza.
               </p>
               <p className="my-6">
                  One of our greatest strengths is our location. We are situated in the middle of the city center, which means that our guests can easily explore all the sights and sounds of this vibrant metropolis. Plus, we are just a stones thrown away from the Grand Egyptian Museum, making it incredibly easy for guests to visit their favorite parts of Egypt.
               </p>
               <p>
                  So why wait? Book your stay at Dream Inn today and experience the perfect blend of serenity, convenience and comfort in the heart of the city.
               </p>
            </div>
         </div>
         <div className='flex-1 flex items-center justify-center' data-aos="fade-left">
            <div className="relative sm:h-[300px] h-[200px] sm:w-[400px] w-[300px] border-2 border-primaryColor">
               <Image src={aboutUs} alt='about us image' className='sm:h-[300px] h-[200px] sm:w-[400px] w-[300px] object-cover absolute sm:-left-5 -left-4 sm:-bottom-5 -bottom-4' />
            </div>
         </div>
      </div>
   )
}

export default AboutUsSection