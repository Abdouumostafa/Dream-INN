import React from 'react'

interface IProps {
   title: string,
   value?: number | string
}

const Bullets = ({ title, value }: IProps) => {
   return (
      <div className='flex items-center gap-2 text-sm'>
         <div className="bg-lightBlack h-1 w-1 rounded-full"></div>
         <div className="flex items-center gap-1 flex-1">
            <p className="text-lightBlack">{title}{value ? ':' : ''}</p>
            <p>{value ? `${value}` : ''}</p>
         </div>
      </div>
   )
}

export default Bullets