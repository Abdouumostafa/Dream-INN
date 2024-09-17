"use client"
import React, { useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image'
import { motion } from 'framer-motion'
import heroImg from '@/assets/hero2.svg'
import calendar from '@/assets/calendar.svg'
import guest from '@/assets/guest2.svg'
import DatePicker from 'react-datepicker';
import arrowDown from '@/assets/arrowDown.svg'
import { useRecoilState } from 'recoil';
import { endDateState, startDateState } from '@/atoms/nightsNumber.atom';

const HeroSection = ({ onSearchClick }: any) => {
   const [startDate, setStartDate] = useRecoilState(startDateState);
   const [endDate, setEndDate] = useRecoilState(endDateState);

   useEffect(() => {
      const storedStartDate = localStorage.getItem('startDate');
      const storedEndDate = localStorage.getItem('endDate');

      if (storedStartDate) setStartDate(new Date(storedStartDate));
      if (storedEndDate) setEndDate(new Date(storedEndDate));
   }, []);

   return (
      <div className="relative w-[100vw] md:h-[calc(100vh-107px)] h-[100vh]" id='home'>
         <Image src={heroImg} alt="hero image" className="w-screen h-full object-cover" />
         <div className="absolute z-0 bg-[rgba(0,0,0,0.45)] top-0 left-0 w-full h-full"></div>
         <div className="absolute md:top-1/2 top-[65%] left-1/2 !-translate-x-1/2 !-translate-y-2/3 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                  duration: 1.2,
                  delay: 0.2,
               }}
            >
               <h1 className="text-white md:text-7xl sm:text-5xl text-3xl w-full whitespace-nowrap block">
                  Immerse Yourself In
                  <br />
                  Total Comfort At
                  <br />
                  Dream Inn
               </h1>
               <p className="text-white my-10 text-center sm:text-base text-xs">
                  Make your holiday memorable with
                  <br />
                  extraordinary comfort, ultimate luxury,
                  <br />
                  and impeccable service.
               </p>
            </motion.div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{
                  duration: 1.3,
                  delay: 0.2,
               }}
               className="mt-10 bg-white p-4 flex md:flex-row flex-col items-center gap-5 rounded-md md:w-fit w-full md:h-[103px] h-fit md:text-base text-xs">
               <div className='flex flex-col gap-1 items-start'>
                  <label>Start Date</label>
                  <div className='border-2 border-primaryColor rounded-md flex items-center px-3 h-[45px] w-[200px]'>
                     <p className='py-3 border-r-2 pr-3 border-r-primaryColor'>
                        <Image src={calendar} alt='icon' />
                     </p>
                     <div className="px-3 flex items-center">
                        <DatePicker
                           selected={startDate}
                           onChange={(date: any) => setStartDate(date)}
                           dateFormat="yyyy-MM-dd"
                           placeholderText="Select a date"
                           className='focus:outline-none w-28'
                        />
                        <Image src={arrowDown} alt='arrow down' />
                     </div>
                  </div>
               </div>

               {/* End Date Picker */}
               <div className='flex flex-col gap-1 items-start'>
                  <label>End Date</label>
                  <div className='border-2 border-primaryColor rounded-md flex items-center px-3 h-[45px] w-[200px]'>
                     <p className='py-3 border-r-2 pr-3 border-r-primaryColor'>
                        <Image src={calendar} alt='icon' />
                     </p>
                     <div className="px-3 flex items-center">
                        <DatePicker
                           selected={endDate}
                           onChange={(date: any) => setEndDate(date)}
                           dateFormat="yyyy-MM-dd"
                           placeholderText="Select a date"
                           className='focus:outline-none w-28'
                        />
                        <Image src={arrowDown} alt='arrow down' />
                     </div>
                  </div>
               </div>
               <div className='flex flex-col gap-1 items-start'>
                  <label>Guests</label>
                  <div className='border-2 border-primaryColor rounded-md flex items-center px-3 h-[45px] w-[200px]'>
                     <p className='py-3 border-r-2 pr-3 border-r-primaryColor'><Image src={guest} alt='icon' /></p>
                     <div className="px-3 flex items-center w-full">
                        <select name="guests" id="guests" className='focus:outline-none w-full'>
                           <option value="1guest">1 Guest</option>
                           <option value="2guests">2 Guests</option>
                        </select>
                     </div>
                  </div>
               </div>
               <button className='text-white bg-primaryColor text-center px-6 md:h-full h-10 rounded-md' onClick={onSearchClick}>Search</button>
            </motion.div>
         </div>
      </div>)
}

export default HeroSection