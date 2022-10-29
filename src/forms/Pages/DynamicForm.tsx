
import formJson from '../data/custom-form.json'
import { Formik , Form }  from 'formik'
import { MyTextInput } from '../components/MyTextInput';

const initialValues : { [key : string] : any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value
}

export const DynamicForm = () => {
  return (
    <div>
        <Formik
            initialValues={ initialValues }
            onSubmit = {( values ) => {
                console.log(values)
            }}
        >
            {(formik) => (
                <Form>
                    { formJson.map( ({ type , name , placeholder , label}) => {
                        return <MyTextInput 
                                        key={ name }
                                        type={( type as any )} 
                                        name = { name } 
                                        label = { label } 
                                        placeholder = {placeholder}/>
                    })}
                    <button type='submit'> Submit </button>        
                </Form>
                    
            )}
        </Formik>

    </div>
  )
}
