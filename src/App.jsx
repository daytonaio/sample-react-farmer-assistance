import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { AuthProvider } from './context/AuthContext';
import UserProfile from './components/UserProfile';
import  OrganicFarming  from './pages/OrganicFarming';
import Sustainability from './pages/Sustainability';
import CropMonitoring from './pages/CropMonitoring';
import SupplyChain from './pages/SupplyChain';
import ContactAndAdvisory from './pages/ContactAndadvisory';
import ClimatePrediction from './pages/ClimatePrediction';

function App() {
  return (
    <AuthProvider>
         <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/OrganicFarming' element={<OrganicFarming/>}/>
        <Route path='/Sustainability' element={<Sustainability/>}/>
        <Route path='/CropMonitoring' element={<CropMonitoring/>}/>
        <Route path='/SupplyChain' element={<SupplyChain/>}/>
        <Route path='/ContactAndAdvisory' element={<ContactAndAdvisory/>}/>
        <Route path='/Climateprediction' element={<ClimatePrediction/>}/>
      </Routes>
      <Footer/>
    </Router>
    </AuthProvider>
   
  )
}

export default App
