"use client"
import { numberOfNightsSelector } from '@/atoms/nightsNumber.atom';
import React from 'react'
import { useRecoilValue } from 'recoil';

const Page = () => {
   const numberOfNights = useRecoilValue(numberOfNightsSelector);


   return (
      <div>{numberOfNights}</div>
   )
}

export default Page