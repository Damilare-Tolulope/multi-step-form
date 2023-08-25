import React, { useState } from 'react'
import Indicator from './components/Indicator'
import Button from '../../components/Button';
import Step1 from './components/Step1'
import Step3 from './components/Step3';
import Step2 from './components/Step2';
import Step4 from './components/Step4';
import { useFormik } from 'formik';
import { useToasts } from 'react-toast-notifications'
import { step1Schema } from '../../utils/Validations';
import { areAllKeysFilled } from '../../utils/helper';
import ThankYou from './components/ThankYou';

const index = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        step1: {
            name: '',
            email: '',
            phone_number: '',
        },
        step2: {
            plan: '',
            planData: '',
        },
        step3: {
            addOns: [],
        },
    });

    const { addToast } = useToasts();

    const initialValues = formData.step1;

    const formikStep1 = useFormik({
        initialValues,
        onSubmit: (values) => {
            setFormData({...formData, step1: values})
        },
        validateOnBlur: true,
        validationSchema: step1Schema,
    })

    const handleNextStep = () => {

        if(currentStep === 1){

            if(areAllKeysFilled(formikStep1.values)){
                formikStep1.handleSubmit()
                setCurrentStep(currentStep + 1);
            }else addToast("Please fill in all details", {appearance: "warning"});
            
        }else if(currentStep === 2){

            if(formData.step2.plan && formData.step2.planData){
                setCurrentStep(currentStep + 1);
            }else addToast("Please select a plan", {appearance: "warning"});

        }else if(currentStep === 3 ){

            if(formData.step3.addOns.length > 0){
                setCurrentStep(currentStep + 1);
            }else addToast("Please select one addOn", {appearance: "warning"});
        }
      };
    
      const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
      };
    
      const handleFormDataChange = (step, fieldName, value) => {
        setFormData(prevData => ({
          ...prevData,
          [step]: {
            ...prevData[step],
              [fieldName]: value,
            }
        }));
      };

      const handleConfirmOrder = () => {
        addToast("Order Confirmed", {appearance: 'success'});
        
        setTimeout(() => {
            setCurrentStep(currentStep + 1);
        }, 2000);
      }

    const renderStep = () => {
        switch (currentStep) {
          case 1:
            return <Step1 formData={formikStep1} onChange={(fieldName, value) => handleFormDataChange('step1', fieldName, value)} />;
          case 2:
            return <Step2 formData={formData.step2} onChange={(fieldName, value) => handleFormDataChange('step2', fieldName, value)} />;
          case 3:
            return <Step3 formData={formData.step3} onChange={(fieldName, value) => handleFormDataChange('step3', fieldName, value)} />;
          case 4:
            return <Step4 formData={formData} />;
          case 5:
            return <ThankYou />;
          default:
            return <Step1 formData={formikStep1} onChange={(fieldName, value) => handleFormDataChange('step1', fieldName, value)} />;
        }
      };


  return (
    <div className='bg-white rounded-xl p-5 grid grid-cols-6 w-1/2'>
        <div className="col-span-2 h-[100%]">
            <Indicator currentStep={currentStep} />
        </div>
        <div className="col-span-4 px-20 py-5">
            {renderStep()}

            {
                currentStep !== 5 ?
                    <div className={`w-full ${currentStep !== 1 ? "flex items-center justify-between" : "text-right"} mt-20`}>
                        {
                            currentStep !== 1 ?
                                <Button onClick={handlePreviousStep} className="" isSecondary>Go Back</Button>
                            :
                                <></>
                        }
                        {
                            currentStep === 4 ?
                                <Button onClick={handleConfirmOrder} className="">Confirm</Button>
                            :
                                <Button onClick={handleNextStep} className="">Next Step</Button>
                        }
                    </div>
                :
                    <></>
            }
        </div>
    </div>
  )
}

export default index