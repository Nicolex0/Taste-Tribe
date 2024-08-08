import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs';
import Recipes from './pages/Recipes/Recipes';
import UserProfile from './pages/UserProfile/UserProfile'
import Home from './pages/Home/Home'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<LogIn/>} ></Route>
        <Route path="/signUp" element={<SignUp/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contactUs" element={<ContactUs/>} ></Route>
        <Route path="/recipes" element={<Recipes/>} ></Route>
        <Route path="/userprofile" element={<UserProfile/>} ></Route>
    </Routes>
    </BrowserRouter>
   </>

  )
}