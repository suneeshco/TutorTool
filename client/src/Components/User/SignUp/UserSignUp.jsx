import React from 'react'
import './UserSignUp.css'
import { useFormik } from 'formik';
import { studentSignUpSchema } from '../../Validations/SignUpSchema.js';

const UserSignUp = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
          firstname: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        validationSchema: studentSignUpSchema,
        onSubmit: async (values) => {
          console.log(values.firstname);
    
    
          const response = await apiRequest({
            method: 'post',
            url: '/signup',
            data: {
              firstname: values.firstname,
              email: values.email,
              password: values.password
            }
          })
          console.log(response);
        }
        })
    return (
        <div >
            <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app. </p>
                
                    <label>
                        <input required="" placeholder="" id='firstname' type="text" className="input" value={values.firstname}  onChange={handleChange} onBlur={handleBlur} />
                        <span>Firstname</span>
                    </label>
                    {errors.firstname && touched.firstname && <p style={{fontSize:12,color:'red'}}>{errors.firstname}</p>}

                <label>
                    <input required="" placeholder="" id='email' type="email" className="input" value={values.email}  onChange={handleChange} onBlur={handleBlur} />
                    <span>Email</span>
                </label>
                {errors.email && touched.email && <p style={{fontSize:12,color:'red'}}>{errors.email}</p>}
                <label>
                    <input required="" placeholder="" id='password' type="password" className="input" value={values.password}  onChange={handleChange} onBlur={handleBlur} />
                    <span>Password</span>
                </label>
                {errors.password && touched.password && <p style={{fontSize:12,color:'red'}}>{errors.password}</p>}
                <label>
                    <input required="" placeholder="" id='confirmPassword' type="password" className="input" value={values.confirmPassword}  onChange={handleChange} onBlur={handleBlur} />
                    <span>Confirm password</span>
                </label>
                {errors.confirmPassword && touched.confirmPassword && <p style={{fontSize:12,color:'red'}}>{errors.confirmPassword}</p>}
                <button className="submit">Submit</button>
                <p className="signin">Already have an account ? <a href="#">Signin</a> </p>
            </form>
        </div>
    )
}

export default UserSignUp