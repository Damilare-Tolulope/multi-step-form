import React from 'react'
import WithScrollToTop from '../../../components/WithScrollToTop'

const Step4 = ({ formData }) => {
  return (
    <div>
        
        <div className="mb-5">
            <h1 className='text-marineblue font-extrabold text-xl md:text-3xl'>Finishing up</h1>
            <p className='text-coolgray mt-2 text-sm md:text-base'>Double-check everything looks OK before confirming.</p>
        </div>

        <div className="mb-5 md:mb-10 bg-lightgray p-5 rounded-lg text-sm md:text-base">
            <div className="border-b-2 border-coolgray py-5 mb-5 flex items-center justify-between">
                <div className="">
                    <p className='text-marineblue'>{formData?.step2?.planData?.name} (<span className="capitalize">{formData?.step2?.plan}</span>)</p>
                    <p className='text-purplishblue hover:underline text-md font-bold cursor-pointer'>Change</p>
                </div>
                <p>{formData?.step2?.planData?.price}</p>
            </div>
            <div>
                {
                    formData?.step3?.addOns.map((addOn, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                            <p>{addOn.type}</p>
                            <p>{addOn.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className='p-5 flex items-center justify-between'>
            <p>Total (per {formData?.step2?.plan === "monthly" ? "month" : "year"})</p>
            <p className='text-purplishblue text-md font-bold'>+$12/{formData?.step2?.plan === "monthly" ? "mo" : "yr"}</p>
        </div>

    </div>
  )
}

export default WithScrollToTop(Step4)