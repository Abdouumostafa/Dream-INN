import Image from 'next/image'
import React from 'react'
import k from '@/assets/rooms/kingRoom/pic-1.svg'
import PrimaryButton from './PrimaryButton'

interface IProps {
   roomPhoto: any,
   roomType: string,
   pricePerNight: number,
   roomFeatures: any,
}

const PrimaryRoomCard = ({ roomPhoto, roomType, pricePerNight, roomFeatures }: IProps) => {
   return (
      <div className='border rounded-md w-full overflow-hidden text-center'>
         <Image src={roomPhoto} alt={'Room Photo'} className='w-full hover:scale-110 hover:rotate-1 transition-all' />
         <div className="px-5 pb-10">
            <h3 className='font-medium mt-8 mb-4 text-2xl'>{roomType}</h3>
            <p className='font-medium text-2xl flex items-center justify-center gap-1'>${pricePerNight} <span className='text-lightBlack text-sm font-light'>/night</span></p>
            <hr className='h-[2px] bg-lightBlack mt-3 mb-5' />
            <div className="grid grid-cols-2 gap-6 mb-10 text-lightBlack text-xs px-3">
               {roomFeatures}
            </div>
            <PrimaryButton isBorder title='book now' href='/rooms' />
         </div>
      </div>
   )
}

export default PrimaryRoomCard