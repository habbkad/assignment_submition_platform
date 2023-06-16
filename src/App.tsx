import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Sign_up from "./Components/Sign-up/Sign_up";
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import User_routes from "./router/User_routes";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar children={"hi"} />
      {/* <LogIn /> */}
    </div>
  );
}

export default App;
