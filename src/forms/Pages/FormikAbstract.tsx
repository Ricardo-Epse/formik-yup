import { useFormik , Formik , Form , Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { MyCheckbox , MyTextInput , MySelect } from '../components'

import '../styles/styles.css'

export const FormikAbstract= () => {

  return (
    <div>
        <h1> FormikAbstract </h1>

        <Formik
            initialValues={{
                firstName : '',
                lastName  : '',
                email     : '',
                terms : false,
                genero : '',
            }}

            onSubmit = { ( values ) =>{
                console.log( values )
            }}

            validationSchema = {
                Yup.object({
                    firstName : Yup.string()
                                .max(25, 'Maximo 25 caracteres')
                                .required('Requerido'),
                    lastName : Yup.string()
                                .max(25, 'Maximo 25 caracteres')
                                .required('Requerido'),
                    email   : Yup.string()
                                .max(30, ' Debe ser un email ')
                                .email('No es un formato valido')
                                .required('Requerido'),
                    terms   : Yup.boolean()
                                .oneOf([true], 'Debe aceptar las condiciones'),
                    genero :   Yup.string()
                                .required('Requerido'),
                })
            }
        >
            {
            (formik) => (
            <Form>

                <MyTextInput 
                    label='First name' 
                    name='firstName'
                    placeholder='Ricardo'       
                />
                <MyTextInput 
                    label='Last name' 
                    name='lastName'
                    placeholder='Pérez'
                />

                <MyTextInput 
                    label='Email Address' 
                    name='email'
                    placeholder='email'
                    type='email'
                />

                {/* Control = . para añadir elementos faltantes */}
                <MySelect name="genero" as="select" label='Genero'>
                    <option value="">Selecciona tu genero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                </MySelect>

                <MyCheckbox label='Terminos y condiciones' name="terms"/>

                <button type='submit'> Boton </button>

            </Form>                
            )}
        </Formik>


    </div>
  )
}