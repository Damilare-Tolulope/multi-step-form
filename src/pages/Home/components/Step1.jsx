import React from 'react'
import Input from '../../../components/Input'

const Step1 = ({ formData, onChange }) => {
  return (
    <div className=''>

        <div className="mb-10">
            <h1 className='text-marineblue font-extrabold text-3xl'>Personal info</h1>
            <p className='text-coolgray mt-2'>Please provide your name, email address and phone number</p>
        </div>

        <form className="">
            <Input 
                label="Name"
                value={formData.name}
                onChange={(e) => onChange('name', e.target.value)}
                placeholder="e.g Stephen King"
                type="text"
                name="name"
            />
            <Input 
                label="Email Address"
                value={formData.email}
                onChange={(e) => onChange('email', e.target.value)}
                placeholder="e.g stephenking@lorem.com"
                type="email"
                name="email"
            />
            <Input 
                label="Phone Number"
                value={formData.phone_number}
                onChange={(e) => onChange('phone_number', e.target.value)}
                placeholder="e.g +1 234 5678"
                type="text"
                name="phone"
            />
        </form>
    </div>
  )
}

export default Step1