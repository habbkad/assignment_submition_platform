import React, { useEffect, useState } from "react";
import axios from "axios";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../Redux/Store";
import { addStudent } from "../Redux/StudentSlice";

const baseURL = "http://localhost:5002/api/v1/students/";

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

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
