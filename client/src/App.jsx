import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Recipes from "./pages/Recipes/Recipes";
import UserProfile from "./pages/UserProfile/UserProfile";
import Home from "./pages/Home/Home";
import Layout from "./pages/layout";
import Error from "./pages/Error/Error";
//import NavBar from './components/NavBar/NavBar';
//import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="/login" element={<LogIn />}/>
            <Route path="/signUp" element={<SignUp />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contactUs" element={<ContactUs />}/>
            <Route path="/recipes" element={<Recipes />}/>
            <Route path="/userprofile" element={<UserProfile />}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
