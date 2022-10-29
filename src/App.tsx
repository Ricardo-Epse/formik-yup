import React from 'react'
import { RegisterPage } from './forms/Pages/RegisterPage'
import './forms/styles/styles.css'
import { FormikPages } from './forms/Pages/FormikPages';
import { FormikYubPage } from './forms/Pages/FormikYubPage';
import { FormikComponents } from './forms/Pages/FormikComponents';
import { FormikAbstract } from './forms/Pages/FormikAbstract';

export const App = () => {
  return (
    <div>
      {/* <RegisterPage/> */}
      {/* <FormikPages /> */}
      {/* <FormikYubPage/> */}
      {/* <FormikComponents/> */}
      <FormikAbstract/>
    </div>
  )
}
