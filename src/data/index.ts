import { nanoid } from "nanoid";
import basicKingRoom from '@/assets/rooms/kingRoom/pic-1.svg'
import basicQueenRoom from '@/assets/rooms/queenRoom/pic-1.svg'
import basicDeluxeRoom from '@/assets/rooms/deluxeRoom/pic-1.svg'
import wifi from '@/assets/wifi.svg'
import bed from '@/assets/bed.svg'
import breakfast from '@/assets/breakfast.svg'
import guest from '@/assets/guest.svg'
import tub from '@/assets/tub.svg'
import cancelation from '@/assets/cancelation.svg'

export const navbarLinks = [
   {
      id: nanoid(),
      title: 'Home',
      href: '/'
   },
   {
      id: nanoid(),
      title: 'About',
      href: '#about'
   },
   {
      id: nanoid(),
      title: 'Services',
      href: '/services'
   },
   {
      id: nanoid(),
      title: 'Rooms',
      href: '#rooms'
   },
   {
      id: nanoid(),
      title: 'Contact Us',
      href: '#contact-us'
   }
]


export const basicRooms = [
   {
      id: nanoid(),
      roomPhoto: basicKingRoom,
      roomType: 'King Room',
      pricePerNight: 50,
      roomFeatures: [
         {
            id: nanoid(),
            icon: wifi,
            feature: ['Free WiFi']
         },
         {
            id: nanoid(),
            icon: bed,
            feature: ['1 king bed ', '2 single beds']
         },
         {
            id: nanoid(),
            icon: breakfast,
            feature: ['Breakfast']
         },
         {
            id: nanoid(),
            icon: guest,
            feature: ['2 Guests']
         },
         {
            id: nanoid(),
            icon: tub,
            feature: ['Tub']
         },
      ]
   },
   {
      id: nanoid(),
      roomPhoto: basicQueenRoom,
      roomType: 'Queen Room',
      pricePerNight: 50,
      roomFeatures: [
         {
            id: nanoid(),
            icon: wifi,
            feature: ['Free WiFi']
         },
         {
            id: nanoid(),
            icon: bed,
            feature: ['1 king bed ', '2 single beds']
         },
         {
            id: nanoid(),
            icon: breakfast,
            feature: ['Breakfast']
         },
         {
            id: nanoid(),
            icon: guest,
            feature: ['2 Guests']
         },
      ]
   },
   {
      id: nanoid(),
      roomPhoto: basicDeluxeRoom,
      roomType: 'Deluxe Room',
      pricePerNight: 40,
      roomFeatures: [
         {
            id: nanoid(),
            icon: wifi,
            feature: ['Free WiFi']
         },
         {
            id: nanoid(),
            icon: bed,
            feature: ['1 king bed ', '2 single beds']
         },
         {
            id: nanoid(),
            icon: breakfast,
            feature: ['Breakfast']
         },
         {
            id: nanoid(),
            icon: guest,
            feature: ['2 Guests']
         },
      ]
   }
]

export const roomFeatures = [
   {
      id: nanoid(),
      icon: wifi,
      feature: ['Free WiFi']
   },
   {
      id: nanoid(),
      icon: bed,
      feature: ['1 king bed ', '2 single beds']
   },
   {
      id: nanoid(),
      icon: breakfast,
      feature: ['Free Continental Breakfast']
   },
   {
      id: nanoid(),
      icon: guest,
      feature: ['2 Adults & 1 Child']
   },
   {
      id: nanoid(),
      icon: cancelation,
      feature: ['Free cancellation until two days before your check-in date']
   },
   {
      id: nanoid(),
      icon: tub,
      feature: ['Tub']
   },
]