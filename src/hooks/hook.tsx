import React, { useEffect, useState } from "react";
import axios from "axios";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../Redux/Store";
import { addStudent } from "../Redux/StudentSlice";
import {
  addStudentAssignments,
  addAssignmentDetails,
} from "../Redux/AssignmentsSlice";

const baseURL = "http://localhost:5002/api/v1/students/";
const assignmentURL = "http://localhost:5002/api/v1/assignments";

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
        //console.log(data);
        return data;
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
        //console.log(data);
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

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
