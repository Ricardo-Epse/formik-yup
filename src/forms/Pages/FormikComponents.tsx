import { useFormik , Formik , Form , Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
        <h1> FormikComponents </h1>

        <Formik
            initialValues={{
                firstName : '',
                lastName  : '',
                email     : '',
                terms : false,
                jobType : '',
            }}

            onSubmit = { ( values ) =>{
                console.log( values )
            }}
            validationSchema = {
                Yup.object({
                    firstName : Yup.string()
                                .max(15, ' Debe tener 15 caracteres')
                                .required('Requerido'),
                    lastName : Yup.string()
                                .max(10, 'Debe tener 10 caracteres o menos')
                                .required('Requerido'),
                    email   : Yup.string()
                                .max(30, ' Debe ser un email ')
                                .email('No es un formato valido'), 
                    terms   : Yup.boolean()
                                .oneOf([true], 'Debe aceptar las condiciones'),
                    jobType : Yup.string()
                                .notOneOf(['It'], 'Esta opcion no es permitida')
                                .required('Requerido'),
                })
            }
        >
            {
            (formik) => (
            <Form>
                <label htmlFor="firstName"> First name </label>
                <Field name = "firstName" type = "text"/>
                <ErrorMessage name='firstName' component="span"/>

                <label htmlFor="lastName"> Last Name </label>
                <Field name = "lastName" type = "text"/>
                <ErrorMessage name='lastName' component="span"/>

                <label htmlFor="email"> Email Address </label>
                <Field name = "email" type = "text"/>
                <ErrorMessage name='email' component="span"/>

                <label htmlFor="jobType"> Job Type </label>
                <Field name = "jobType" as="select">
                    <option value="">Selecciona algo</option>
                    <option value="Developer">Developer</option>
                    <option value="It">IT</option>
                    <option value="Designer">Designer</option>
                    <option value="Front">Front</option>
                </Field>
                <ErrorMessage name='jobType' component="span"/>

                <label> 
                    <Field name = "terms" type = "checkbox"/>
                    Terms and conditions 
                </label>
                <ErrorMessage name='terms' component="span"/>

                <button type='submit'> Boton </button>

            </Form>                
            )}
        </Formik>


    </div>
  )
}

