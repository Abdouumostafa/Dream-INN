import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const SecondaryInput = () => {
   const [startDate, setStartDate] = useState(new Date());
   return (
      <div className='border-2 border-primaryColor rounded-md flex items-center px-3'>
         <p className='py-3 border-r-2 pr-3 border-r-primaryColor'>icon</p>
         <div className="pl-3">
            <DatePicker
               selected={startDate}
               onChange={(date: any) => setStartDate(date)}
               dateFormat="yyyy-MM-dd"
               placeholderText="Select a date"
               className='focus:outline-none'
            />
         </div>
      </div>
   )
}

export default SecondaryInput