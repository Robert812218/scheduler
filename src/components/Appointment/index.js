import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Empty from "./Empty";
import Show from "./Show";
import { create } from "react-test-renderer";
import Form from "./Form";
import Back from "hooks/useVisualMode"
import Header from "./Header";
import Status from "./Status";
import Confirm from "components/Appointment/Confirm";
import Error from "components/Appointment/Error";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const EDIT = "EDITING";
const CONFIRM = "CONFIRMING";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    // props.interview ? CREATE : EMPTY
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer
    }
  }

  function deleting() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(error => transition(ERROR_DELETE, true));
  }

  function edit() {
    transition(EDIT);
  }

  function confirm() {
    transition(CONFIRM);
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
      {mode === DELETING && <Status message="Deleting" />}
      {mode === EDIT && <Status message="Editing" />}
      {mode === ERROR_SAVE && (
        <Error 
          message="There was an error saving your appointment"
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error 
          message="There was an error deleting your appointment"
          onClose={back}
        />
      )}
      
    </article>
  );
}