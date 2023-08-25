import React from 'react'

const Input = ({ label, value, name, onChange, placeholder, type }) => {
  return (
    <div className='mb-5 text-marineblue'>
        <label className='font-bold block'>{label}</label>
        <input 
            name={name} 
            className='border border-coolgray rounded-lg mt-2 outline-none w-full transition linear duration-300 p-4 hover:border-purplishblue focus:border-purplishblue placeholder:text-coolgray' 
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} />
    </div>
  )
}

export default Input