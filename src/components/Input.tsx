import React from 'react'

interface IProps {
   type: string,
   placeholder: string,
   onChange?: (text: any) => any,
   name: string,
   className?: string
}

const Input = ({ type, placeholder, onChange, name, className }: IProps) => {
   return (
      <div className="text-center">
         <input
            type={type}
            className={`lg:w-1/2 w-[85%] border-b border-b-[#00000045] placeholder:text-[#00000045] placeholder:capitalize focus:outline-none placeholder:sm:text-base text-sm my-2 py-1 pl-1 ${className}`}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            required
            name={name}
         />
      </div>
   )
}

export default Input