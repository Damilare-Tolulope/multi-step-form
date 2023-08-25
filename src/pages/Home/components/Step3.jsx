import React, { useEffect, useState } from 'react'
import { addOns, yearlyAddOns } from '../../../data'

const Step3 = ({ formData, onChange }) => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [data, setData] = useState(addOns)

    const handleCheckboxChange = (item) => {
        if (checkedItems.includes(item)) {
            setCheckedItems(checkedItems.filter(checkedItem => checkedItem !== item));
        } else {
            setCheckedItems([...checkedItems, item]);
        }
    };

    useEffect(() => {
        if(formData?.step2?.plan === "montly") setData(addOns);
        else setData(yearlyAddOns);
    }, [data]);

    useEffect(() => onChange('addOns', checkedItems), [checkedItems]);

  return (
    <div>
        
        <div className="mb-10">
            <h1 className='text-marineblue font-extrabold text-3xl'>Pick add-ons</h1>
            <p className='text-coolgray mt-2'>Add-ons help enhance your gaming experience.</p>
        </div>

        <div>
            {
                data.map((addOn, index) => (
                    <label key={index} className={`w-full flex mb-5 gap-8 p-5 rounded-lg cursor-pointer border border-lightgray transition duration-300 hover:border-purplishblue`}>
                        <input type="checkbox" checked={checkedItems.includes(addOn)} onChange={() => handleCheckboxChange(addOn)} className='scale-150' />
                        <div className="flex items-center justify-between w-full">
                            <div className="">
                                <h3 className='font-bold text-marineblue'>{addOn.type}</h3>
                                <p className='text-coolgray'>{addOn.info}</p>
                            </div>
                            <p>{addOn.price}</p>
                        </div>
                    </label>
                ))
            }
        </div>

    </div>
  )
}

export default Step3