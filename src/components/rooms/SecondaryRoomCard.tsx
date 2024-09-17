import React, { useState } from 'react'
import Bullets from '../Bullets';
import Input from '../Input';

interface IProps {
   images: any,
   roomType: string,
   roomPrice: number,
   numberOfNights: number,
   numberOfRooms: number,
   checkIn: string,
   checkOut: string,
}

const SecondaryRoomCard = ({ images, roomType, roomPrice, numberOfNights, numberOfRooms, checkIn, checkOut }: IProps) => {
   const [selectedImage, setSelectedImage] = useState(images?.length > 0 ? images[0] : null);

   // Function to handle thumbnail click
   const handleThumbnailClick = (image: any) => {
      setSelectedImage(image);
   };
   return (
      <div className='sm:p-10 p-4 shadow-md w-full my-12 flex lg:flex-row flex-col items-start gap-8 h-fit'>
         <div className="w-full flex-[55%]">
            <div className="gallery-slider">
               {/* Main Large Image */}
               <div className="w-full mb-5 lg:h-[500px] sm:h-[400px] h-[250px]">
                  <img src={selectedImage} alt="Main" className="main-image" />
               </div>

               {/* Thumbnails */}
               <div className="thumbnails-container">
                  {images?.map((image: string, index: number) => (
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
            <div className="sm:px-5 px-2">
               <h3 className='font-medium mt-8 mb-4 text-center text-2xl'>{roomType}</h3>
               <p className='font-medium text-xl flex items-center justify-center gap-1'>${roomPrice} <span className='text-lightBlack text-sm font-light'>/night</span></p>
               <hr className='h-[2px] bg-lightBlack mt-3 mb-5' />
               <div className="flex items-start sm:flex-row flex-col justify-between w-full">
                  <div className="mt-6 flex flex-col gap-2">
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
                  <div className="sm:mt-6 mt-2 flex flex-col gap-2 text-lightBlack">
                     <Bullets
                        title='Check in'
                        value={checkIn}
                     />
                     <Bullets
                        title='Check out'
                        value={checkOut}
                     />
                  </div>
               </div>
               <div className="flex flex-col mt-2 gap-2">
                  <Bullets
                     title='Please note that you will receive an email within 24 hours to confirm your reservation.' />
                  <Bullets
                     title='For reservations which are for more that 2 nights you will receive an email to pay a 30% deposit to confirm your reservation.' />
               </div>
               <div className="flex items-center gap-2 my-6">
                  <p className="text-lightBlack text-lg">Total:</p>
                  <p className='text-sm'>${roomPrice * numberOfNights}</p>
               </div>
            </div>
            <form className="px-4">
               <Input
                  type='text'
                  placeholder='full name'
                  name='full name'
                  className='!w-full'
               />
               <Input
                  type='email'
                  placeholder='email address'
                  name='email address'
                  className='!w-full'
               />
               <Input
                  type='tel'
                  placeholder='phone number'
                  name='phone number'
                  className='!w-full'
               />
               <Input
                  type='text'
                  placeholder='country'
                  name='country'
                  className='!w-full'
               />
               <Input
                  type='text'
                  placeholder='bed choice'
                  name='bed choice'
                  className='!w-full'
               />
            </form>
            <button className={`border border-black hover:bg-black hover:text-white  font-medium rounded-lg w-full py-4 px-7 capitalize whitespace-nowrap transition-colors block text-center mt-8 md:text-base text-xs`}>confirm</button>
         </div>
      </div>
   )
}

export default SecondaryRoomCard