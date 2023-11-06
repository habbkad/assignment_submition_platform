import React from "react";
import Video_resources from "../../Components/VideoResources/Video_resources";
import { useVideos } from "../../hooks/hook";

interface Props {}

const Video_resource = (props: Props) => {
  useVideos();
  return (
    <div>
      <Video_resources />
    </div>
  );
};

export default Video_resource;
