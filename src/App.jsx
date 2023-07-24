import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


import { CartPage, ContactPage, DetailPage, HomePage } from './screens'
import { NavLink, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div>
      <Header></Header>
      
      <Footer></Footer>
    </div>
  )
}

export default App
