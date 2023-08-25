import React from 'react'

const Input = ({ label, value, name, onChange, onBlur, placeholder, type, error }) => {
  return (
    <div className='mb-5 text-marineblue'>
        <div className="flex items-center justify-between">
            <label className='font-bold block'>{label}</label>
            {error && <p className='text-[red] text-sm'>{error}</p>}
        </div>
        <input 
            name={name} 
            className='border border-coolgray rounded-lg mt-2 outline-none w-full transition linear duration-300 p-4 py-3 hover:border-purplishblue focus:border-purplishblue placeholder:text-coolgray' 
            type={type} 
            value={value} 
            onChange={onChange}
            onBlur={onBlur} 
            placeholder={placeholder} />
    </div>
  )
}

export default Input