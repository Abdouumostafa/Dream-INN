"use client"
import React from 'react'
import PrimaryRoomCard from '../PrimaryRoomCard'
import axios from 'axios'
import { useQuery } from 'react-query'
import { roomFeatures } from '@/data'
import Image from 'next/image'

const RoomsSection = () => {
   const fetchRooms = async () => {
      const response = await axios.get('https://dreaminn-backend-production.up.railway.app/rooms');
      return response.data;
   };

   const { data, isLoading } = useQuery('rooms', fetchRooms);

   return (
      <>
         {isLoading ?
            '' :
            <div className='my-12' id='rooms'>
               <hr className='bg-[#00000080] h-[2px]' />
               <h2 className='font-semibold text-3xl text-center my-10'>Rooms</h2>
               <div className="grid-container px-[5%]">
                  {Array.isArray(data) && data.length > 0 ? (data?.map(({ _id, pictures, room_name, room_price }: any) => {
                     return <PrimaryRoomCard
                        key={_id}
                        roomPhoto={pictures[0]}
                        roomFeatures={
                           room_name === "King Room" ?
                              roomFeatures.map(({ id, icon, feature }) => {
                                 return <div className="flex items-center gap-4" key={id}>
                                    <Image src={icon} alt='feature icon' />
                                    <div className='flex flex-col items-start text-start gap-1'>
                                       {feature.map((f, idx) => <p key={idx}>{f}</p>)}
                                    </div>
                                 </div>
                              })
                              :
                              roomFeatures.slice(0, 5).map(({ id, icon, feature }) => {
                                 return <div className="flex items-center text-start gap-4" key={id}>
                                    <Image src={icon} alt='feature icon' />
                                    <div className='flex flex-col items-start gap-1'>
                                       {feature.map((f, idx) => <p key={idx}>{f}</p>)}
                                    </div>
                                 </div>
                              })
                        }
                        roomType={room_name}
                        pricePerNight={room_price}
                     />
                  }))
                     : (
                        <p>No rooms available</p>
                     )}
               </div>
            </div>
         }
      </>
   )
}

export default RoomsSection