import React from 'react'
import PrimaryRoomCard from '../PrimaryRoomCard'
import { basicRooms } from '@/data'
import Image from 'next/image'

const RoomsSection = () => {
   return (
      <div className='my-12'>
         <hr className='bg-[#00000080] h-[2px]' />
         <h2 className='font-semibold text-3xl text-center my-10'>Rooms</h2>
         <div className="grid-container px-[5%]">
            {basicRooms.map(({ id, roomFeatures, roomPhoto, roomType, pricePerNight }) => {
               return <PrimaryRoomCard
                  key={id}
                  roomPhoto={roomPhoto}
                  roomFeatures={roomFeatures.map(({ id, icon, feature }) => {
                     return <div className="flex items-center gap-4" key={id}>
                        <Image src={icon} alt='feature icon' />
                        <div className='flex flex-col items-start gap-1'>
                           {feature.map((f, idx) => <p key={idx}>{f}</p>)}
                        </div>
                     </div>
                  })}
                  roomType={roomType}
                  pricePerNight={pricePerNight}
               />
            })}
         </div>
      </div>
   )
}

export default RoomsSection