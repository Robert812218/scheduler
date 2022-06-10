import React, { useState, useEffect } from "react";
import 'components/Appointment/styles.scss';
import InterviewerList from "../interviewerList";
import Button from "components/Button";
// import Button from "../Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null); 
  const onSave = () => {
    props.acceptAppointment();
  }
  const onCancel = () => {
    props.rejectAppointment();
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
      <form autoComplete="off">
        <input 
          className="appointment__create-inputtext--semi-bold"
          value={student}
          type="text"
          placeholder="Enter Student Name"
          // your code goes here
          onChange={(event) => setStudent(event.target.value)}
        />
   
        <InterviewerList 
          // your code goes here
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </form>
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button danger onClick={onCancel}>Cancel</Button> 
            <Button confirm onClick={onSave}>Save</Button>
          </section>
        </section>

    </main>
  );
}