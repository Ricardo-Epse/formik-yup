import React from 'react';
import { useField, ErrorMessage } from 'formik';

interface Props{
  label: string;
  name : string;
  [x : string] : any;
}

export const MyCheckbox = ( {label , ...props} : Props) => {
  
  const [ field ] = useField( {...props , type:'checkbox'});
  // console.log(field)
 
  return (
    <>
      <label>
        <input type='checkbox' {...field} { ...props } />
         { label }   
      </label>
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
