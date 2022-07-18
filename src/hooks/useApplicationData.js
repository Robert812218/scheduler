import axios from 'axios';
import React, { useEffect, useState } from "react";

export default function useApplicationData() {
    const [state, setState] = useState({
      day: "Monday",
      days: [],
      appointments: {},
      interviewers: {}
    });
  
    const setDay = day => setState({...state, day});
  
    function bookInterview(id, interview) {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
  
      const appointments = {
        ...state.appointments,
        [id]: appointment
      }
      setState({
        ...state,
        appointments
      })
  
      return axios.put("/api/appointments:id", {})
    }
    
    function save(name, interviewer) {
      const interview = {
        student: name,
        interviewer
      };
    // props.bookInterview
    }

    function cancelInterview(id) {
      const appointment = {
        ...state.appointments[id],
        interview: null
      };

      const appointments = {
        ...state.appointments,
        [id]: appointment
      }

      return axios.delete("/api/appointments:id", {})
      .then(res => {
        setState({...state, appointments})
        return res
      })
    }
  
    useEffect(() => {
      Promise.all([
        axios.get("/api/days"),
        axios.get("/api/appointments"),
        axios.get("/api/interviewers"),
      ]).then((all) => {
        const [days, appointments, interviewers] = all;
        // console.log("days: ", days);
        setState({
          ...state,
          // days: all[0].data,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        })
        getInterviewersForDay({
          ...state,
          // days: all[0].data,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }, state.day);
      })
    }, [state.day]);
}