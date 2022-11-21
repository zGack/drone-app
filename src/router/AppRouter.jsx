import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../auth/pages'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<RegisterPage/>}/>
    </Routes>
  )
}
