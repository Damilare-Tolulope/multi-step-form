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
                value={formData.values.name}
                onChange={formData.handleChange}
                onBlur={formData.onBlur}
                error={formData.errors.name}
                placeholder="e.g Stephen King"
                type="text"
                name="name"
            />
            <Input 
                label="Email Address"
                value={formData.values.email}
                onChange={formData.handleChange}
                onBlur={formData.onBlur}
                error={formData.errors.email}
                placeholder="e.g stephenking@lorem.com"
                type="email"
                name="email"
            />
            <Input 
                label="Phone Number"
                value={formData.values.phone_number}
                onChange={formData.handleChange}
                onBlur={formData.onBlur}
                error={formData.errors.phone_number}
                placeholder="e.g +1 234 5678"
                type="text"
                name="phone_number"
            />
        </form>
    </div>
  )
}

export default Step1