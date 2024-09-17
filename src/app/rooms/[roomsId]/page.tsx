"use client"
import { endDateState, numberOfNightsSelector, startDateState } from '@/atoms/nightsNumber.atom';
import SecondaryRoomCard from '@/components/rooms/SecondaryRoomCard';
import Layout from '@/layouts/Layout';
import axios from 'axios';
import { format } from 'date-fns';
import { useParams } from 'next/navigation';
import React from 'react'
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

const Page = () => {
   const { id } = useParams()
   const numberOfNights = useRecoilValue(numberOfNightsSelector);
   const fetchRooms = async () => {
      const response = await axios.get(`https://dreaminn-backend-production.up.railway.app/rooms?id=${id}`);
      return response.data;
   };
   const startDate = format(useRecoilValue(startDateState), 'MMMM dd, yyyy');
   const endDate = format(useRecoilValue(endDateState), 'MMMM dd, yyyy');

   const { data, isLoading } = useQuery('rooms', fetchRooms);

   return (
      <Layout>
         {isLoading ? ''
            :
            <main className='overflow-y-scroll px-8'>
               <SecondaryRoomCard
                  key={data?._id}
                  images={data?.pictures}
                  roomType={data?.room_name}
                  roomPrice={data?.room_price}
                  numberOfRooms={data?.number_of_rooms}
                  numberOfNights={numberOfNights}
                  checkIn={startDate}
                  checkOut={endDate}
               />;
            </main>
         }
      </Layout>
   )
}

export default Page