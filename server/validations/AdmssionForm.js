import Validator from 'validator';
import isEmpty from './isEmpty.js';



    export default function validateAdmssionForm(data) {
        console.log("dataaaaa",data);
    let errors = {};
    data.phonenumber = !isEmpty(data.phonenumber) ? data.phonenumber : '';
    data.age = !isEmpty(data.age) ? data.age : '';



    if(!Validator.isLength(data.phonenumber, {min: 10, max: 10})) {
        errors.phonenumber = 'Phone must be 10 digits long';
    }

       
    if(Validator.isEmpty(data.phonenumber)) {
        errors.phonenumber = 'Phone Number Field is Required';
    }


if(!Validator.isLength(data.age,{min:2,})){
    errors.age= 'Minimum age requirement is 13';
}




    return {
        errors,
        isValid: isEmpty(errors)
    }
}