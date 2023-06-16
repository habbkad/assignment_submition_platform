import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5002/api/v1/students/";

export const useStudent = (id: string) => {
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
        //console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getStudent();
  }, []);
};
