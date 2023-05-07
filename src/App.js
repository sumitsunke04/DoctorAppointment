
import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Register from './component/Register';
import Home from './component/Home';
import Header from './component/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './component/Footer';
import DoctorLogin from './component/DoctorLogin';
import DoctorRegister from './component/DoctorRegster';
import ShowDoctors from './component/ShowDoctors';
import ShowPatientCard from './component/ShowPatientCard';
import ShowPatients from './component/ShowPatients';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      {/* <Header/> */}
      <Routes>
      <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/login" element = {<Login/>}/>
        <Route exact path = "/Register" element = {<Register/>}/>
        <Route exact path = "/about" element={<ShowPatients/>}/>
        <Route exact path = "/contact" element={<DoctorRegister/>}/>
        <Route exact path = "/findDoctor" element={<ShowDoctors/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    
  );
}

export default App;
