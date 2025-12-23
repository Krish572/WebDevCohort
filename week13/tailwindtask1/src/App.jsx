import { Birthpage } from "./components/Birthpage";
import { Demo } from "./components/Demo";
import { Emailpage } from "./components/Emailpage";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Otppage } from "./components/Otppage";
import { Hero } from "./components/Hero";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="/home" replace/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="demo" element={<Demo/>}/>
          <Route path="birth" element={<Birthpage/>}/>
          <Route path="email" element={<Emailpage/>}/>
          <Route path="otp" element={<Otppage/>}/>
        </Route>
        <Route path="/hero" element={<Hero/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
