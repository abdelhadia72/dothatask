import { useState } from "react";
import { Navbar } from "./components/header/Navbar";
import Routers from "./components/routes/Routes";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Emailsent from "./components/pages/Emailsent";
import Homepage from "./components/pages/Homepage";
import SearchCategorie from "./components/areas/SearchCategorie";
import Footer from "./components/footer/Footer";
import ServiceDetails from "./components/pages/ServiceDetails";
import { Link } from "react-router-dom";
import NavbarLogged from "./components/header/NavbarLogged";
import { LOGGED } from "./components/Auth/Signin";

export const App = () => {
  const [Auth, setAuth] = useState(false);
  LOGGED ? console.log(LOGGED) : console.log("not logged");

  // Add logic here

  return (
    <div>
      <div className="z-[1] font-ubuntu ">
        {!LOGGED ? <Navbar /> : <NavbarLogged />}
      </div>

      <div className="flex flex-col justify-between">
        <Routers />
        <Footer />
      </div>
    </div>
  );
};
