import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Empty from "./Empty";
import Show from "./Show";
import { create } from "react-test-renderer";
import Form from "./Form";
import Back from "hooks/useVisualMode"
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function Save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    }
  }

  function Back(name, interviewer) {

  }


  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
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
        <Form interviewers={props.interviewers} onSave={Save(props.name, props.interviewer)} onCancel={back} />
      )}

      <hr className="appointment__seperator" />
    </header>
  );
}