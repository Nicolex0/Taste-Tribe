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
    </>

  )
}