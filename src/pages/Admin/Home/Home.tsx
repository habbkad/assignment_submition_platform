import React from "react";
import { useAppSelector, useStudent, useTutor } from "../../../hooks/hook";

interface Props {}

const Home = (props: Props) => {
  const { user }: any = useAppSelector((state) => state.user);
  console.log(user);

  useTutor(user.id);
  return <div>kklkk</div>;
};

export default Home;
