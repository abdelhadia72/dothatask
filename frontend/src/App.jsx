import { useState } from "react";
import { Navbar } from "./components/header/Navbar";
import Routers from "./components/routes/Routes";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Emailsent from "./components/pages/Emailsent";
import Homepage from "./components/pages/Homepage";

export const App = () => {
  const [Auth, setAuth] = useState(false);
  return (
    <div>
      <div className="z-[1]">
        <Navbar />
      </div>
      <Routers />
      <Homepage />
    </div>
  );
};
