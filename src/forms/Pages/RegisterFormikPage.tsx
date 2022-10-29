import { useFormik , Formik , Form , Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { MyCheckbox , MyTextInput , MySelect } from '../components'

import '../styles/styles.css'

export const RegisterFormikPage= () => {

  return (
    <div>
        <h1> Register Formik page </h1>

        <Formik
            initialValues={{
                firstName : '',
                email     : '',
                password : '',
                password2 : '',
            }}

            onSubmit = { ( values ) =>{
                console.log( values )
            }}

            validationSchema = {
                Yup.object({
                    firstName : Yup.string()
                                .min(2 , 'Minimo 2 caracteres')
                                .max(25, 'Maximo 25 caracteres')
                                .required('Requerido'),
                    email   : Yup.string()
                                .min(2 , 'Minimo 2 caracteres')
                                .max(15, ' Debe ser un email ')
                                .email('No es un formato valido')
                                .required('Requerido'),
                    password   : Yup.string()
                                .min( 6 , 'Minimo 6 caracteres')
                                .max(15, ' Maximo 15 ')
                                .required('Requerido'),   
                    password2   : Yup.string()
                                .oneOf([Yup.ref('password')]  , 'Las contraseñas no son iguales' )
                                .min( 6 , 'Minimo 6 caracteres')
                                .max(15, ' Maximo 15 ')
                                .required('Requerido'),   
                             
                })
            }
        >
            {
            ({handleReset }) => (
            <Form>

                <MyTextInput 
                    label='First name' 
                    name='firstName'
                    placeholder='Ingresa una contraseña'       
                />

                <MyTextInput 
                    label='Email Address' 
                    name='email'
                    placeholder='Ingresa tu email'
                    type='email'
                />

                <MyTextInput 
                    label='password' 
                    name='password'
                    type='password'
                />

                 <MyTextInput 
                    label='Repite tu password' 
                    name='password2'
                    type='password'
                />

                <button type='submit'> Boton </button>

                <button type='submit' onClick={handleReset}> reset </button>

            </Form>                
            )}
        </Formik>


    </div>
  )
}