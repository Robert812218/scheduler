import React, { useState, useEffect } from "react";
import 'components/Appointment/styles.scss';
import InterviewerList from "../interviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null); 
  const [error, setError] = useState("");

  const onSave = () => {
    props.acceptAppointment(student, interviewer);
  }
  const onCancel = () => {
    props.rejectAppointment();
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
      <form autoComplete="off">
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          value={student}
          onChange={event => {
            setStudent(event.target.value);
          }}
          data-testid="student-name-input"
        />
   
        <InterviewerList 
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