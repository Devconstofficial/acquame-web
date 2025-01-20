
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Login from './pages/auth/login';
import ForgotPassword from './pages/auth/forgot_password';
import OTPVerification from './pages/auth/otp_verification';
import ResetPassword from './pages/auth/reset_password';
import Home from './pages/home';
import Physical from "./pages/physical";
import Medical from "./pages/medical_info";
import Weight from "./pages/weight_page";
import Height from "./pages/height_page";
import Financial from "./pages/financial";
import Asset from "./pages/asset_page";
import Mental from "./pages/mental";
import Profile from "./pages/profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/otp-verification' element={<OTPVerification />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/physical' element={<Physical />} />
        <Route path='/financial' element={<Financial />} />
        <Route path='/medical-screen' element={<Medical />} />
        <Route path='/weight-screen' element={<Weight />} />
        <Route path='/height-screen' element={<Height />} />
        <Route path='/asset-screen' element={<Asset />} />
        <Route path='/mental' element={<Mental />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;