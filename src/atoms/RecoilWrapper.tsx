"use client"
import React, { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

type IProps = {
    children: ReactNode
}

const RecoilWrapper = ({ children }: IProps) => {
    return (
        <RecoilRoot>{children}</RecoilRoot>
    )
}

export default RecoilWrapper