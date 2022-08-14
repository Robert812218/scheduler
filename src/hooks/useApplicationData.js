import axios from 'axios';
import React, { useEffect, useState } from "react";
import { getInterviewersForDay } from 'helpers/selectors';

export default function useApplicationData() {
    const [state, setState] = useState({
      day: "Monday",
      days: [],
      appointments: {},
      interviewers: {}
    });
    
    console.log(state);

    const setDay = day => setState({...state, day});

    function findDay(day) {
      const daysOfWeek = {
        Monday: 0,
        Tuesday: 1,
        Wednesday: 2,
        Thursday: 3,
        Friday: 4
      }
      return daysOfWeek[day];
    }

    useEffect(() => {
      Promise.all([
        
      ])
    })
  
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
  
      return axios.put("/api/appointments:id", {interview: interview})
    }
    
    function save(name, interviewer) {
      const interview = {
        student: name,
        interviewer
      };
    }

    const dayOfWeek = findDay(state.day);

    let day = {
      ...state.days[dayOfWeek],
      spots: state.days[dayOfWeek]
    }
    if (!state.appointments) {
      day.spots = state.days[dayOfWeek].spots - 1
    } else {
      day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots
      }
    }

    let days = state.days
    days[dayOfWeek] = day;

    function cancelInterview(id) {
      const appointment = {
        ...state.appointments[id],
        interview: null
      };

      const appointments = {
        ...state.appointments,
        [id]: appointment
      }

      const thisWeekDay = findDay(state.day)

      const day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spot + 1
      }

      let days = state.days
      days[dayOfWeek] = day;

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
      })
    }, []);

    return (
      state,
      setDay,
      bookInterview,
      cancelInterview
    )
  }