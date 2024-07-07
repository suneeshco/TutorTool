import * as yup from 'yup';

export const studentSignUpSchema = yup.object().shape({
    firstname: yup.string().trim().required('First name is required'),
    email: yup.string()
        .trim()
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email')
        .required('Email is required'),
    password: yup.string()
        .trim()
        .required('Password is required')
        .min(8, 'Password must have at least 8 characters')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter'),
    confirmPassword: yup.string()
        .trim()
        .required('Confirm password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    
});