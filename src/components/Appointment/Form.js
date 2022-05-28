import React, { useState, useEffect } from "react";
import 'components/Appointment/styles.scss';
import { InterviewerList } from "../interviewerList";
import { Button } from "../Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null); 

  return (
    <main className="appointment__card appointment__card--create">
      <form autoComplete="off">
        <input 
          className="appointment__create-input text--semi-bold"
          value={student}
          text="text"
          placeholder="Enter Student Name"
          // your code goes here
          onChange={(event) => setStudent(event.target.value)}
        />
      </form>
        <InterviewerList 
          // your code goes here
          Interviewers={props.Interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      <section className="appointment__card-right">
        <section className="appointment__actions">
        <Button danger onClick={props.rejectAppointment}>Cancel</Button> 
        <Button confirm onClick={props.acceptAppointment}>Save</Button>
        </section>
      </section>
    </main>
  );
}