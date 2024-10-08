import { roomFeatures } from '@/data';
import Image from 'next/image'
import React, { useState } from 'react'
import Bullets from '../Bullets';
import Link from 'next/link';

interface IProps {
   images: any,
   roomType: string,
   roomPrice: number,
   numberOfNights: number,
   numberOfRooms: number,
   href: string
}

const RoomCard = ({ images, roomType, roomPrice, numberOfNights, numberOfRooms, href }: IProps) => {
   const [selectedImage, setSelectedImage] = useState(images[0]);

   // Function to handle thumbnail click
   const handleThumbnailClick = (image: any) => {
      setSelectedImage(image);
   };
   return (
      <div className='sm:p-10 p-4 shadow-md w-full my-12 flex lg:flex-row flex-col items-start gap-8'>
         <div className="w-full flex-[55%]">
            <div className="gallery-slider">
               {/* Main Large Image */}
               <div className="w-full mb-5 lg:h-[500px] sm:h-[400px] h-[250px]">
                  <img src={selectedImage} alt="Main" className="main-image" />
               </div>

               {/* Thumbnails */}
               <div className="thumbnails-container">
                  {images.map((image: string, index: number) => (
                     <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`thumbnail sm:h-[60px] h-[40px] ${image === selectedImage ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(image)}
                     />
                  ))}
               </div>
            </div>
         </div>

         <div className="w-full flex-[45%]">
            <div className="sm:px-5 px-2 pb-10">
               <h3 className='font-medium mt-8 mb-4 text-center text-2xl'>{roomType}</h3>
               <p className='font-medium text-xl flex items-center justify-center gap-1'>${roomPrice} <span className='text-lightBlack text-sm font-light'>/night</span></p>
               <hr className='h-[2px] bg-lightBlack mt-3 mb-5' />
               <div className="grid grid-cols-2 gap-6 mb-10 text-lightBlack text-xs">
                  {/* Features Of King Room */}
                  {roomType === 'King Room' ? roomFeatures.map(({ id, icon, feature }) => {
                     return <div className="flex items-center gap-4" key={id}>
                        <Image src={icon} alt='feature icon' />
                        <div className='flex flex-col items-start gap-1'>
                           {feature.map((f, idx) => <p key={idx}>{f}</p>)}
                        </div>
                     </div>
                  })
                     :
                     /* Features Of Other Rooms */
                     roomFeatures.slice(0, 5).map(({ id, icon, feature }) => {
                        return <div className="flex items-center gap-4" key={id}>
                           <Image src={icon} alt='feature icon' />
                           <div className='flex flex-col items-start gap-1'>
                              {feature.map((f, idx) => <p key={idx}>{f}</p>)}
                           </div>
                        </div>
                     })
                  }
               </div>
               <div className="mt-10 flex flex-col gap-2">
                  <Bullets
                     title='Price per night'
                     value={`$${roomPrice}`}
                  />
                  <Bullets
                     title='Number of nights'
                     value={numberOfNights}
                  />
                  <Bullets
                     title='Number of rooms'
                     value={numberOfRooms}
                  />
               </div>
               <div className="flex items-center gap-2 my-10">
                  <p className="text-lightBlack text-lg">Total:</p>
                  <p className='text-sm'>${roomPrice * numberOfNights}</p>
               </div>
               <Link href={href} className={`border border-black hover:bg-black hover:text-white  font-medium rounded-lg w-full py-4 px-7 capitalize whitespace-nowrap transition-colors block text-center`}>Reserve Now</Link>
            </div>
         </div>
      </div>
   )
}

export default RoomCard