import React, { useState } from 'react'
import TitleDesc from '../TitleDesc'
import Input from '../Input'
import PrimaryButton from '../PrimaryButton'

const ContactUs = () => {
   const [formData, setFormData] = useState({
      name: '',
      emailPhone: '',
      message: ''
   })

   return (
      <div className='my-24'>
         <TitleDesc
            title='have a question ?'
            description='Fill the form and we will contact you shortly'
         />
         <form>
            <Input
               type='text'
               placeholder='name'
               name='name'
               onChange={(text) => {
                  setFormData((prev) => {
                     return {
                        ...prev,
                        name: text
                     }
                  })
               }}
            />
            <Input
               type={'tel' || 'email'}
               placeholder='phone / email'
               name='phoneEmail'
               onChange={(text) => {
                  setFormData((prev) => {
                     return {
                        ...prev,
                        emailPhone: text
                     }
                  })
               }}
            />
            <Input
               type='text'
               placeholder='message'
               name='message'
               onChange={(text) => {
                  setFormData((prev) => {
                     return {
                        ...prev,
                        message: text
                     }
                  })
               }}
            />
            <div className="mt-8">
               <PrimaryButton isBorder title='send message' href='' className='mx-auto block w-fit !mt-14 text-lightBlack' />
            </div>
         </form>
      </div>
   )
}

export default ContactUs