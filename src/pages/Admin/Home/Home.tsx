import React from "react";
import {
  useAppSelector,
  useStudent,
  useTutor,
  useUnapprovedAssignments,
} from "../../../hooks/hook";

interface Props {}

const Home = (props: Props) => {
  useUnapprovedAssignments();
  const { user }: any = useAppSelector((state) => state.user);
  console.log(user);

  useTutor(user.id);
  return <div>kklkk</div>;
};

export default Home;
