import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Tutor_routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Tutor_routes;
