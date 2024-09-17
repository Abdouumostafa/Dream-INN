import React from 'react'
import TitleDesc from '../TitleDesc'
import { useQuery } from 'react-query';
import axios from 'axios';
import RoomCard from './RoomCard';

const RoomsSection = ({ numberOfNights }: any) => {

   const fetchRooms = async () => {
      const response = await axios.get('https://dreaminn-backend-production.up.railway.app/rooms');
      return response.data;
   };

   const { data, isLoading } = useQuery('rooms', fetchRooms);

   return (
      <>
         {isLoading ? "" :
            <div className='my-24 mx-[5%]'>
               <TitleDesc
                  title='Available Rooms For Your Dates'
                  description='Get the best prices by booking with us directly'
               />
               {data?.map(({ _id, room_price, room_name, number_of_rooms, pictures }: any) => {
                  return <RoomCard
                     key={_id}
                     images={pictures}
                     roomType={room_name}
                     roomPrice={room_price}
                     numberOfRooms={number_of_rooms}
                     numberOfNights={numberOfNights}
                     href={`/rooms/${_id}`}
                  />;
               })}
            </div>
         }
      </>
   )
}

export default RoomsSection