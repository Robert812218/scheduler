import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";
import useVisualMode from "hooks/useVisualMode";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Header from "./Header";
import Status from "./Status";
import Error from "components/Appointment/Error";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const EDIT = "EDITING";
const CONFIRM = "CONFIRM";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function destroy() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
  }
  
  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === EMPTY && (
        <Empty onAdd={() => transition(CREATE)} />
      )}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} acceptAppointment={save} rejectAppointment={back} />
      )}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === EDIT && <Form 
        interviewers={props.interviewers} 
        acceptAppointment={save} 
        rejectAppointment={back}
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        />
      }
      {mode === CONFIRM && (<Confirm
        onCancel={back}
        onConfirm={destroy} 
        message="Delete this appointment?"
      />)}
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