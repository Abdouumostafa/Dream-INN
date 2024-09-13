import Link from 'next/link'
import React from 'react'
interface IProps {
   title: string,
   isBorder: boolean,
   href: string
}

const PrimaryButton = ({ title, isBorder, href }: IProps) => {
   return (
      <Link href={href} className={`${isBorder ? 'border border-black' : ''} text-sm font-medium rounded-lg bg-white py-4 px-7 capitalize whitespace-nowrap`}>{title}</Link>
   )
}

export default PrimaryButton