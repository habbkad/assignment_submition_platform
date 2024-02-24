import React, { useEffect, useState } from "react";
import axios from "axios";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../Redux/Store";
import { addStudent, addTutor } from "../Redux/StudentSlice";
import { addResources } from "../Redux/ResourcesSlice";
import {
  addStudentAssignments,
  addAssignmentDetails,
  addUnapprovedAssignment,
} from "../Redux/AssignmentsSlice";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const baseURL = "https://main--hablms.netlify.app/api/v1/students/";
const assignmentURL = "https://main--hablms.netlify.app/api/v1/assignments";
const videosURL = "https://main--hablms.netlify.app/api/v1/resources";
const tutorURL = "https://main--hablms.netlify.app/api/v1/tutor/";
const unapprovedAssignmentsURL =
  "https://main--hablms.netlify.app/api/v1/assignments/unapproved";

export const useStudent = (id: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(baseURL + id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          withCredentials: true,
        });
        dispatch(addStudent(data.student));
        //console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    getStudent();
  }, []);
};
export const useTutor = (id: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(tutorURL + id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          withCredentials: true,
        });
        dispatch(addTutor(data.tutor));
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    getStudent();
  }, []);
};
//get assignments
export const useAssignments = (id: string) => {
  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(assignmentURL + id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          withCredentials: true,
        });

        return data;
      } catch (err) {
        console.log(err);
      }
    };
    getStudent();
  }, []);
};

//get videos
export const useVideos = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(videosURL, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          withCredentials: true,
        });
        dispatch(addResources(data.resource));
        console.log(data.resource);

        return data.resources;
      } catch (err) {
        console.log(err);
      }
    };
    getStudent();
  }, []);
};

//get students assignments
export const useStudentAssignments = (id: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getAssignments = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5002/api/v1/assignments/${id} `,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
            withCredentials: true,
          }
        );
        dispatch(addStudentAssignments(data.assignment));
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    getAssignments();
  }, []);
};

//get students assignment details
export const useAssignmentDetails = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getAssignments = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5002/api/v1/assignments/single/${id} `,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
            },
            withCredentials: true,
          }
        );
        dispatch(addAssignmentDetails(data.assignment));
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    getAssignments();
  }, []);
};

export const signOutUser = async () => {
  try {
    await axios
      .get("http://localhost:5002/api/v1/auth/signout", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        withCredentials: true,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

//create resouce
export const useCreateResouce = async (
  module: string,
  title: string,
  week: number,
  resourceLink: string,
  stack: string
) => {};

//get all unapproved Assignments
export const useUnapprovedAssignments = async () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getAssignments = async () => {
      try {
        const { data } = await axios.get(unapprovedAssignmentsURL, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          withCredentials: true,
        });
        console.log(data);

        dispatch(addUnapprovedAssignment(data.unapproved));
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    getAssignments();
  }, []);
};

//approveAssignment
export const approveAssignment = async (update: any) => {
  try {
    const { data } = await axios.put(
      `http://localhost:5002/api/v1/assignments/${update._id}`,
      update,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
