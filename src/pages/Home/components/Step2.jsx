import React, { useEffect, useState } from 'react';
import { monthlyData, yearlyData } from '../../../data';

const Step2 = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [data, setData] = useState(monthlyData);
    const [selectedPlan, setSelectedPlan] = useState(0);

    useEffect(() => {
        if(isMonthly) setData(monthlyData);
        else setData(yearlyData);
    }, [isMonthly])

  return (
    <div>
        
        <div className="mb-10">
            <h1 className='text-marineblue font-extrabold text-3xl'>Select your plan</h1>
            <p className='text-coolgray mt-2'>You have option of monthly or yearly billing.</p>
        </div>

        <div className="flex items-start justify-between gap-5 mb-10">
            {
                data.map(({name, img, price}, index) => {
                    return (
                        <div onClick={() => setSelectedPlan(index)} className={`w-full p-5 rounded-lg cursor-pointer border border-lightgray transition duration-300 hover:border-purplishblue ${selectedPlan === index ? "border-purplishblue": ""}`} key={name}>
                            <img className='mb-16' src={img} alt={name} />

                            <div>
                                <h3 className='font-bold text-marineblue'>{name}</h3>
                                <p className='text-coolgray'>{price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className="flex mx-auto items-center justify-center gap-5 p-5 bg-magnolia rounded-xl">
            <p className={`font-bold ${isMonthly ? "text-marineblue" : "text-coolgray"}`}>Monthly</p>
            <label className="switch">
                <input type="checkbox" onChange={() => setIsMonthly(!isMonthly)} />
                <span className="slider round"></span>
            </label>
            <p className={`font-bold ${!isMonthly ? "text-marineblue" : "text-coolgray"}`}>Yearly</p>
        </div>
    </div>
  )
}

export default Step2