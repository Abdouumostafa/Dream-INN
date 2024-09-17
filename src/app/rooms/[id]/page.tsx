"use client"
import { numberOfNightsSelector } from '@/atoms/nightsNumber.atom';
import React from 'react'
import { useRecoilValue } from 'recoil';

const page = () => {
    const numberOfNights = useRecoilValue(numberOfNightsSelector);


    return (
        <div>{numberOfNights}</div>
    )
}

export default page