import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Sign_up from "./Components/Sign-up/Sign_up";
import SignUp from "./pages/signUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";
import User_routes from "./router/User_routes";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useAppSelector } from "./hooks/hook";
import Sign_up_admin from "./Components/Sign-up/Sign_up_admin";
import NavbarAdmin from "./Components/Admin/Navbar/Navbar";
import Error from "./Components/Error/Error";
function App() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <BrowserRouter>
      {user.id === "" ? (
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup-admin" element={<Sign_up_admin />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      ) : user.role === "tutor" ? (
        <NavbarAdmin />
      ) : (
        <Navbar children={"hi"} />
      )}

      {/* <LogIn /> */}
    </BrowserRouter>
  );
}

export default App;
