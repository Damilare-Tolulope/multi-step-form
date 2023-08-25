import React, { useEffect, useState } from 'react';
import { monthlyData, yearlyData } from '../../../data';

const Step2 = ({ onChange }) => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [data, setData] = useState(monthlyData);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelectPlan = (index) => {
        setSelectedPlan(index);

        if(isMonthly) {
            onChange('plan', "monthly")
            onChange('planData', monthlyData[index])
        }else {
            onChange('plan', "yearly")
            onChange('planData', yearlyData[index])
        }

    }
    
    useEffect(() => {
        if(isMonthly) {
            setData(monthlyData);
            onChange('plan', "monthly")
            onChange('planData', monthlyData[selectedPlan])
        }
        else {
            setData(yearlyData);
            onChange('plan', "yearly")
            onChange('planData', yearlyData[selectedPlan])
        } 
    }, [isMonthly]);

    
  return (
    <div>
        
        <div className="mb-5">
            <h1 className='text-marineblue font-extrabold text-xl md:text-3xl'>Select your plan</h1>
            <p className='text-coolgray mt-2 text-sm md:text-base'>You have option of monthly or yearly billing.</p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-5 mb-10">
            {
                data.map(({name, img, price}, index) => {
                    return (
                        <div onClick={() => handleSelectPlan(index)} className={`w-full flex md:block gap-5 md:p-5 p-2 rounded-lg cursor-pointer border border-lightgray transition duration-300 hover:border-purplishblue ${selectedPlan === index ? "border-purplishblue": ""}`} key={name}>
                            <img className='md:mb-14' src={img} alt={name} />

                            <div>
                                <h3 className='font-bold text-marineblue'>{name}</h3>
                                <p className='text-coolgray text-sm md:text-base'>{price}</p>
                                {!isMonthly ? <p className='font-bold text-marineblue text-sm mt-1'>2 months free</p> : <></>}
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className="flex mx-auto items-center justify-center gap-5 p-3 bg-magnolia rounded-xl">
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