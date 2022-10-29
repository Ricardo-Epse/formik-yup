import React from 'react';
import { useField, ErrorMessage } from 'formik';

interface Props{
  label: string;
  name : string;
  placeholder?: string;
  [x : string] : any;
}

export const MySelect = ( {label , ...props} : Props) => {
  
  const [ field ] = useField( props )
//   console.log(field)
 
  return (
    <>
      <label htmlFor={ props.id || props.name}> { label } </label>
      <select {...field} {...props} />
      <ErrorMessage name={ props.name } component = 'span' className='add-class'/>
      {/* {
        //Errores
        meta.touched && meta.error && (
            <span className='error'> {meta.error} </span>
        )
      } */}
    </>
  )
}

