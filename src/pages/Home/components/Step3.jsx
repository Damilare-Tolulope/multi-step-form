import React, { useEffect, useState } from 'react'
import { addOns } from '../../../data'

const Step3 = ({ onChange }) => {
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (item) => {
        if (checkedItems.includes(item)) {
            setCheckedItems(checkedItems.filter(checkedItem => checkedItem !== item));
        } else {
            setCheckedItems([...checkedItems, item]);
        }
    };

    useEffect(() => onChange('addOns', checkedItems), [checkedItems])

  return (
    <div>
        
        <div className="mb-10">
            <h1 className='text-marineblue font-extrabold text-3xl'>Pick add-ons</h1>
            <p className='text-coolgray mt-2'>Add-ons help enhance your gaming experience.</p>
        </div>

        <div>
            {
                addOns.map((addOn, index) => (
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