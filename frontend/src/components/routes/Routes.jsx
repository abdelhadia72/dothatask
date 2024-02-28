import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import Services from '../pages/Services';
import Homepage from '../pages/Homepage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default Routers;
