import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Empty from "./Empty";
import Show from "./Show";
import { create } from "react-test-renderer";
import Form from "./Form";
import Back from "hooks/useVisualMode"
import Header from "./Header";
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    // props.interview ? CREATE : EMPTY
    props.interview ? SHOW : EMPTY
  );

  function Save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    }
  }

  return (
    <article className="appointment__time">
      <Header time={props.time}/>
      {mode === EMPTY && (
        <Empty onAdd={() => transition(CREATE)} />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onSave={Save} onCancel={back} />
        // <Form interviewers={props.interviewers} />
      )}

    
    </article>
  );
}