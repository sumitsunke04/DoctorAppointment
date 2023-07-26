
import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Register from './component/Register';
import Home from './component/Home';
import Header from './component/Header';
import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import Footer from './component/Footer';
import DoctorLogin from './component/DoctorLogin';
import DoctorRegister from './component/DoctorRegster';
import ShowDoctors from './component/ShowDoctors';
import ShowPatientCard from './component/ShowPatientCard';
import ShowPatients from './component/ShowPatients';
import Aboutus from './component/Aboutus';
import { useEffect, useState } from 'react';


function App() {

  console.log(typeof document.cookie)

  return (
    <BrowserRouter>
      <Navbar/>
      {/* <Header/> */}
      <Routes>

      <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/login" element = {<Login/>}/>
        <Route exact path = "/Register" element = {<Register/>}/>
        <Route exact path = "/appointments" element={<ShowPatients/>}/>
        <Route exact path = "/findDoctor" element={<ShowDoctors/>}/>
        <Route exact path = "/DoctorLogin" element={<DoctorLogin/>}/>
        <Route exact path = "/DoctorRegster" element={<DoctorRegister/>}/>
        <Route exact path = "/Aboutus" element={<Aboutus/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    
  );
}

export default App;
