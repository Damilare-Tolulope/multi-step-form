import { object, string } from "yup";

const phoneRegExp =
/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const name = string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required');
const email = string().email('Invalid email');
const phone_number = string().min(10).matches(phoneRegExp, 'Phone number is not valid');


export const step1Schema = object().shape({
    name: name.required("Name is required"),
    email: email.required("Email is required"),
    phone_number: phone_number.required("Phone number is required"),
})