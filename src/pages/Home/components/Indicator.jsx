import React from 'react'

import bg from '../../../assets/images/bg-sidebar-desktop.svg'

const Indicator = ({ currentStep }) => {

    const steps = [
        {
            id: 1,
            step: "STEP 1",
            data: "YOUR INFO"
        },
        {
            id: 2,
            step: "STEP 2",
            data: "SELECT PLAN"
        },
        {
            id: 3,
            step: "STEP 3",
            data: "ADD-ONS"
        },
        {
            id: 4,
            step: "STEP 4",
            data: "SUMMARY"
        },
    ]

  return (
    <div className="indicator p-10 pb rounded-lg h-full">
        {
            steps.map(({id, data, step}) => (
                <div key={id} className='flex items-center gap-5 mb-10'>
                    <div className={`text-lightgray w-16 h-10 flex items-center justify-center bg-transparent font-bold rounded-full border border-lightgray ${currentStep === id ? "!bg-lightgray text-black" : ""}`}>{id}</div>
                    <div className='w-full'>
                        <p className='text-coolgray'>{step}</p>
                        <p className='text-lightgray font-bold'>{data}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Indicator