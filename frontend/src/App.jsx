import { useState } from "react";
import { Navbar } from "./components/header/Navbar";
import Routers from "./components/routes/Routes";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Emailsent from "./components/pages/Emailsent";

export const App = () => {
  const [Auth, setAuth] = useState(false);
  return (
    <div>
      <Navbar />
      <Routers />
      <Emailsent />
    </div>
  );
};
