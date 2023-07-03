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
function App() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <BrowserRouter>
      {user.id === "" ? (
        <Routes>
          <Route path="/" element={<LogIn />} />
        </Routes>
      ) : (
        <Navbar children={"hi"} />
      )}

      {/* <LogIn /> */}
    </BrowserRouter>
  );
}

export default App;
