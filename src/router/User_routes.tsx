import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../Components/Home/Home";
import Assignments from "../Components/Assignments/Assignments";
import Submit from "../Components/SubmitAssignment/Submit";
import AssignmentDetail from "../Components/AssignmentDetail/AssignmentDetail";
import Video_resource from "../pages/VideoResources/Video_resource";
import WeeklyContent from "../Components/weeklyContent/WeeklyContent";
import Error from "../Components/Error/Error";
function User_routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Video_resource />} />
        <Route>
          <Route path="assignments" element={<Assignments />} />
          <Route path="assignments/:id" element={<AssignmentDetail />} />
        </Route>
        <Route path="submit-assignment" element={<Submit />} />
        <Route path="weeekly-content" element={<WeeklyContent />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default User_routes;
