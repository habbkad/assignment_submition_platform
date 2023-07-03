import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Components/Home/Home";
import Assignments from "../Components/Assignments/Assignments";
import Submit from "../Components/SubmitAssignment/Submit";
import AssignmentDetail from "../Components/AssignmentDetail/AssignmentDetail";
function User_routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:id" element={<AssignmentDetail />} />
        </Route>
        <Route path="submit-assignment" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default User_routes;
