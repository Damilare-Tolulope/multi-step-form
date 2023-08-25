import React from 'react'

const Step4 = ({ formData }) => {
    console.log(formData);

  return (
    <div>
        
        <div className="mb-10">
            <h1 className='text-marineblue font-extrabold text-3xl'>Finishing up</h1>
            <p className='text-coolgray mt-2'>Double-check everything looks OK before confirming.</p>
        </div>

        <div className="mb-10 bg-lightgray p-5 rounded-lg">
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

export default Step4