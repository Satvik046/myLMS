import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext()

export const AppContextProvider=(props)=>{

    const currency=import.meta.env.VITE_CURRENCY

    const navigate=useNavigate()

    const [allCourses,setAllCourses]=useState([])

    const fetchAll=async()=>{
        setAllCourses(dummyCourses)
    }

    //Function to calculate the average rating of a course
    const calculate = (course) => {
        if (!course || !Array.isArray(course.courseRating) || course.courseRating.length === 0) {
          return 0;
        }
      
        let sum = 0;
        for (let i = 0; i < course.courseRating.length; i++) {
          sum += course.courseRating[i].rating;
        }
        return sum / course.courseRating.length;
      };
      

    useEffect(()=>{
        fetchAll()
    },[])

    const value={
        currency,allCourses,navigate,calculate
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

