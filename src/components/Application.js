import React, { useEffect, useState } from "react";
import axios from 'axios';
import DayList from "components/DayList";
import "components/Application.scss";
import "components/DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

export default function Application() {
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

    // return axios.put("/api/appointments:id", { })
  }
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
  // props.bookInterview
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

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  let schedule = dailyAppointments.map(appointment => {
    return (
      <Appointment 
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interviewers={appointment.interviewer}
        interview={appointment.interview}
      />
      // <pre>{JSON.stringify(appointment, null, 2)}</pre>
    )
  });

  // console.log(getInterviewersForDay(state, state.day));
  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day}
          onChange={day => console.log(day)}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section>{schedule}</section>
    </main>
  ); 
}
