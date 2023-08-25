import React from 'react'

import checkmark from '../../../assets/icons/icon-thank-you.svg';


const ThankYou = () => {
  return (
    <div className='text-center flex items-center justify-center flex-col mt-auto py-14 md:py-32'>
        <img className='w-20' src={checkmark} alt="check-mark" />
        <h1 className='text-marineblue font-extrabold text-xl md:text-3xl mt-5 mb-3'>Thank you!</h1>
        <p className='text-coolgray text-sm md:text-base'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default ThankYou