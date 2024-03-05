import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import ForgotPassword from '../Auth/ForgotPassword';
import Services from '../pages/Services';
import Homepage from '../pages/Homepage';
import ServiceDetails from '../pages/ServiceDetails';
import { Profilepage } from '../pages/ProfilePage';
import AddService from '../pages/AddService';
import SettingProfile from '../pages/SettingProfile';
import TypePage from '../Auth/TypePage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details" element={<ServiceDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/add-service" element={<AddService />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/profile" element={<Profilepage />} />
      <Route path="/profile-setting" element={<SettingProfile />} />
      <Route path="/type-user" element={<TypePage />} />
    </Routes>
  );
};

export default Routers;
