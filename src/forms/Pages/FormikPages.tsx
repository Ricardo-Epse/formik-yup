import { useFormik , FormikErrors } from 'formik'
import React from 'react'
import '../styles/styles.css'

interface FormValues {
    firstName : string;
    lastName  : string;
    email     : string;
}

export const FormikPages = () => {

    const validate = ( { firstName , lastName , email } : FormValues ) => {
        const errors : FormikErrors<FormValues> = {}

        if( !firstName ){
            errors.firstName = 'Required';
        } else if( firstName.length >= 12 ){
            errors.firstName = 'Must be 15 characters of less'
        }

        if( !lastName ){
            errors.lastName = 'Required';
        } else if( lastName.length >= 10 ){
            errors.lastName = 'Must be 10 characters of less'
        }

        if (!email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
          }

        return errors;
    }

    const { values , handleSubmit , handleChange , errors , touched , handleBlur} = useFormik({
        initialValues : {
            firstName : '',
            lastName  : '',
            email     : ''
        },
        onSubmit : async(values) => {
            console.log( values )
        },
        validate   
    });

  return (
    <div>
        <h1> Formik basic tutorial </h1>

        <form  onSubmit={ handleSubmit } noValidate >
            <label htmlFor="firstName"> First name </label>
            <input 
                type="text" 
                name="firstName" 
                onBlur={ handleBlur }
                onChange={ handleChange } 
                value = { values.firstName }
            />
            { touched.firstName && errors.firstName && <span> {errors.firstName }</span>}

            <label htmlFor="lastName"> Last Name </label>
            <input 
                type="text" 
                name="lastName"
                onBlur={ handleBlur }
                onChange={ handleChange } 
                value = { values.lastName }
            />
            { touched.lastName &&  errors.lastName && <span> {errors.lastName }</span>}

            <label htmlFor="email"> Email Address </label>
            <input 
                type="email" 
                name="email"
                onBlur={ handleBlur }
                onChange={ handleChange } 
                value = { values.email }
            />
            { touched.email &&  errors.email && <span> {errors.email }</span>}

            <button type='submit'> Boton </button>

        </form>


    </div>
  )
}
