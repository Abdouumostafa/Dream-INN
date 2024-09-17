"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/logo.svg'
import facebook from '@/assets/facebookIcon.svg'
import instagram from '@/assets/instagramIcon.svg'
import gmail from '@/assets/gmail.svg'
import phone from '@/assets/phone.svg'
import Link from 'next/link'
import { navbarLinks } from '@/data'
import PrimaryButton from '@/components/PrimaryButton'

const Layout = ({ children }: any) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => setIsOpen(!isOpen);
   return (
      <main
         className='flex flex-col min-h-screen box'
      >
         {/* Navbar */}
         <nav className='w-full py-4 px-[5%] flex items-center bg-primaryColor relative'>
            <div className="flex items-center w-full">
               <Link href={'/'}>
                  <Image src={logo} alt='logo' className='md:size-[75px] size-[60px]' />
               </Link>
               <ul className="items-center gap-10 ml-[10%] md:flex hidden">
                  {navbarLinks.map(({ id, title, href }) => <li key={id}>
                     <Link href={href} className='text-white text-sm'>{title}</Link>
                  </li>)}
               </ul>
            </div>
            <div className="md:block hidden">
               <PrimaryButton title='book now' isBorder={false} href='/rooms' />
            </div>
            <div className={`burger-icon ${isOpen ? 'open' : ''} md:hidden block`} onClick={toggleMenu}>
               <div className="bar"></div>
               <div className="bar"></div>
               <div className="bar"></div>
            </div>
            {/* Mobile & Tablet Version For Navbar*/}
            <div className={`absolute z-50 bottom-[-90vh] bg-primaryColor w-full h-[90vh] ${isOpen ? 'left-0' : 'left-[-100%]'} transition-all flex flex-col gap-10 items-center`}>
               <ul className="items-center gap-5 flex flex-col mt-14">
                  {navbarLinks.map(({ id, title, href }) => <li key={id}>
                     <Link href={href} className='text-white text-sm'>{title}</Link>
                  </li>)}
               </ul>
               <PrimaryButton title='book now' isBorder={false} href='/rooms' />
            </div>
         </nav>

         {/* The Content */}
         <div className='flex-grow'>
            {children}
         </div>

         {/* Footer */}
         <footer className='w-full pt-6 pb-4 bg-primaryColor flex md:items-start items-center justify-between md:flex-row flex-col gap-10 px-[5%]'>
            <div className="text-center flex flex-col justify-center">
               <Link href={'/'}>
                  <Image src={logo} alt='logo' className='md:size-[75px] size-[60px]' />
               </Link>
               <div className="flex items-center gap-3 mt-4 md:ml-4 ml-1">
                  <Link href={''}>
                     <Image src={facebook} alt='facebook icon' />
                  </Link>
                  <Link href={'https://www.instagram.com/dreaminn.egypt?igsh=MXRtZjE0bmhkOWxuNw=='}>
                     <Image src={instagram} alt='instagram icon' />
                  </Link>
               </div>
            </div>
            <div>
               <ul className="flex items-center gap-7 md:text-base text-sm">
                  <Link href={'/'} className='text-white'>{'Home'}</Link>
                  <Link href={'#contact-us'} className='text-white'>{'Contact Us'}</Link>
               </ul>
               <ul className="flex items-center gap-5 mt-5 md:text-base text-sm">
                  <Link href={'#rooms'} className='text-white'>{'Rooms'}</Link>
                  <Link href={'/services'} className='text-white'>{'Services'}</Link>
               </ul>
            </div>
            <div className='flex flex-col'>
               <Link href={'mailto:support@dreaminnegypt.com'} className="text-white flex items-center gap-3 mb-4">
                  <Image src={gmail} alt='gmail' />
                  support@dreaminnegypt.com
               </Link>
               <div className="flex items-center gap-3 text-white">
                  <Image src={phone} alt='phone' />
                  <div className='text-sm'>
                     <p>+20 114 080 8862</p>
                     <p>+20 121 133 4664</p>
                  </div>
               </div>
            </div>
         </footer>
      </main>
   )
}

export default Layout