import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYubPage = () => {
  
    const { handleSubmit , errors , touched , getFieldProps } = useFormik({
        initialValues : {
            firstName : '',
            lastName  : '',
            email     : ''
        },
        onSubmit : async(values) => {
            console.log( values )
        },
        validationSchema : Yup.object({
            firstName : Yup.string()
                        .max(15, ' Debe tener 15 caracteres')
                        .required('Requerido'),
            lastName : Yup.string()
                        .max(10, 'Debe tener 10 caracteres o menos')
                        .required('Requerido'),
            email : Yup.string()
                        .max(30, ' Debe ser un email ')
                        .email('No es un formato valido')  
                        .required('Requerido'),      
        })
        
    });

  return (
    <div>
        <h1> Formik Components </h1>

        <form  onSubmit={ handleSubmit } noValidate >
            <label htmlFor="firstName"> First name </label>
            <input 
                type="text" {...getFieldProps('firstName')}
            />
            { touched.firstName && errors.firstName && <span> {errors.firstName }</span>}

            <label htmlFor="lastName"> Last Name </label>
            <input 
                type="text" {...getFieldProps('lastName')}
            />
            { touched.lastName &&  errors.lastName && <span> {errors.lastName }</span>}

            <label htmlFor="email"> Email Address </label>
            <input 
                type="email" {...getFieldProps('email')}
            />
            { touched.email &&  errors.email && <span> {errors.email }</span>}

            <button type='submit'> Boton </button>

        </form>


    </div>
  )
}