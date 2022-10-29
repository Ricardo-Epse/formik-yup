import React from 'react'
import { useState , ChangeEvent , FormEvent} from 'react'
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

  const { formData , onChange, resetForm , isValidEmail, 
    name, password, email , password2 } = useForm({
    name : '',
    email : '',
    password : '',
    password2 : ''
  })

   const onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
      event.preventDefault()
      console.log(formData)
   }

  return (
    <div>
        <h1> Register Page </h1>

        <form onSubmit={ (ev) => onSubmit(ev)}>

            <input type='text' 
                name ='name' 
                placeholder='name' 
                value={ name } 
                onChange = { onChange } 
                className = { `${ name.trim().length <= 0 && 'has-error'}`}
            />
            { name.trim().length <= 0 && <span> Este campo es necesario </span>}

            <input type='email' 
                name ='email' 
                placeholder='email' 
                value={ email } 
                onChange = { onChange } 
                className = { `${ !isValidEmail( email ) && 'has-error' }`}
            />
            { !isValidEmail( email ) && <span> Email no es valido </span>}

            <input type='password' 
                name ='password' 
                placeholder='password' 
                value={ password } 
                onChange = { onChange } 
            />

            <input type='password' 
                name ='password2' 
                placeholder='password2' 
                value={ password2 } 
                onChange = { (ev) => onChange(ev)} 
            />

            <button type='submit'> Create </button>
            <button type='button' onClick={ resetForm }> Reset </button>
        </form>

    </div>
  )
}