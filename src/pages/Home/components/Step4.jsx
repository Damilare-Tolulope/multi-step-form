import React from 'react'

const Step4 = () => {
  return (
    <div>
        
        <div className="mb-10">
            <h1 className='text-marineblue font-extrabold text-3xl'>Finishing up</h1>
            <p className='text-coolgray mt-2'>Double-check everything looks OK before confirming.</p>
        </div>

        <div className="mb-10 bg-lightgray p-5 rounded-lg">
            <div className="border-b-2 border-coolgray py-5 mb-5 flex items-center justify-between">
                <div className="">
                    <p className='text-marineblue'>Arcade (Monthly)</p>
                    <p className='text-purplishblue text-md font-bold cursor-pointer'>Change</p>
                </div>
                <p>$9/mo</p>
            </div>
            <div>
                <div className="flex items-center justify-between mb-2">
                    <p>Online Service</p>
                    <p>$51/mo</p>
                </div>
                <div className="flex items-center justify-between">
                    <p>Larger storage</p>
                    <p>$52/mo</p>
                </div>
            </div>
        </div>

        <div className='p-5 flex items-center justify-between'>
            <p>Total (per month)</p>
            <p className='text-purplishblue text-md font-bold'>+$12/mo</p>
        </div>

    </div>
  )
}

export default Step4