<<<<<<< HEAD
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route index element={<Login/>} ></Route>
        <Route path="/SignUp" element={<SignUp/>} ></Route>
    </Routes>
    </BrowserRouter>
=======
import React from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        App
      </div>

>>>>>>> c36b0e3a8a0db95fdab6094f58bb53e087931c99
    </>

  )
}