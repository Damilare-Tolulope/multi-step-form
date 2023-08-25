import React from 'react'
import { steps } from '../../../data'

const Indicator = ({ currentStep }) => {
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

export const MiniIndicator = ({ currentStep }) => {
    return (
        <div className="indicatorMini top-0 pt-10 pb-16 w-full h-full flex items-center justify-center gap-5 mb-10">
            {
                steps.map(({id}) => (
                    <div key={id} className=''>
                        <div className={`text-lightgray w-8 h-8 flex items-center justify-center bg-transparent font-bold rounded-full border border-lightgray ${currentStep === id ? "!bg-lightgray text-black" : ""}`}>{id}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Indicator