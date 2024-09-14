import React from 'react'
import TitleDesc from '../TitleDesc'
import Link from 'next/link'
import Image from 'next/image'
import map from '@/assets/home/locationMap.svg'

const LocationSection = () => {
   return (
      <div>
         <hr className='bg-lightBlack h-[2px] mb-24' />
         <TitleDesc
            title='our location'
            description='We are located 5 minutes walking from the Pyramids of Giza, 13 minutes walking to the Grand Egyptian Museum'
         />
         <Link href={'https://maps.app.goo.gl/ASHmqfQDthXm1Mpy7?g_st=com.google.maps.preview.copy'} target='blank'>
            <Image src={map} alt='map location' className='mx-auto md:px-0 px-[5%] mt-14 mb-36' />
         </Link>
      </div>
   )
}

export default LocationSection