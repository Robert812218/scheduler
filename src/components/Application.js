import React, { useEffect, useState } from "react";
// import axios from 'axios';
import DayList from "components/DayList";
import "components/Application.scss";
import "components/DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

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