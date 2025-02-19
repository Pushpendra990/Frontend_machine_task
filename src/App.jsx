import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}