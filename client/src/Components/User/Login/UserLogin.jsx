import React from 'react'
import './UserLogin.css'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { studentLoginSchema } from '../../Validations/LoginSchema';
import { apiRequest } from '../../../api/axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStudentCredentials } from '../../../Redux/slices/authSlice';


const UserLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: studentLoginSchema,
        onSubmit: async (values) => {
            const response = await apiRequest({
                method: 'post',
                url: '/login',
                data: {
                    email: values.email,
                    password: values.password
                }
            })
            console.log(response);
            if (response.user) {
                toast.success("Login Successful")
                setTimeout(() => {
                    localStorage.setItem("studentToken", response.user.token);
                    dispatch(setStudentCredentials(response.user.user))
                    navigate('/dashboard');
                }, 2000);

            } else if (response.err) {
                toast.error(response.err.error)
            }
        }
    })
    return (
        <div >
            <form class="form" onSubmit={handleSubmit}>
                <p class="title">Login </p>
                <p class="message">Welcome Back </p>
                <label>
                    <input required="" placeholder="" id='email' type="email" class="input" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    <span>Email</span>
                </label>
                {errors.email && touched.email && <p style={{ fontSize: 12, color: 'red' }}>{errors.email}</p>}

                <label>
                    <input required="" placeholder="" id='password' type="password" class="input" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    <span>Password</span>
                </label>
                {errors.password && touched.password && <p style={{ fontSize: 12, color: 'red' }}>{errors.password}</p>}
                <button class="submit" type='submit'>Submit</button>
                <p class="signin">New User? <Link to={'/signup'}> <a href="">Signup</a> </Link></p>
            </form>
        </div>
    )
}

export default UserLogin
