import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Admin/Home/Home";
import Error from "../Components/Error/Error";
import Upload_resources from "../pages/Admin/Upload_resources/Upload_resources";
import Video_resource from "../pages/VideoResources/Video_resource";
import WeeklyContent from "../Components/weeklyContent/WeeklyContent";
import UnapprovedAssignments from "../pages/Admin/NewAssignments/UnapprovedAssignments";
import AssignmentDetails from "../pages/Admin/AssignmentDetails/AssignmentDetails";
import AssignmentDetail from "../Components/Admin/AssignmentDetails/AssignmentDetail";

function Tutor_routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload-resources" element={<Upload_resources />} />
        <Route path="/video-resources" element={<Video_resource />} />
        <Route path="weeekly-content" element={<WeeklyContent />} />
        <Route path="/assignment/">
          <Route path={":id"} element={<AssignmentDetail />} />
        </Route>
        <Route path="/new-assignments" element={<UnapprovedAssignments />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Tutor_routes;
