import React from 'react'

interface IProps {
   title: string,
   description: string
}

const TitleDesc = ({ title, description }: IProps) => {
   return (
      <div className='text-center'>
         <h2 className='text-4xl capitalize font-medium'>{title}</h2>
         <p className="text-lightBlack mt-2 font-light sm:w-1/2 w-3/4 block mx-auto sm:text-base text-sm">{description}</p>
      </div>
   )
}

export default TitleDesc