import React from "react";
import classNames from "classnames";
import InterviewerListItem from "./interviewerListItem";
import './interviewerList.scss';

export default function InterviewerList(props) {
  let interviewers = props.interviewers.map(interviewer => {
    return (
      <interviewerList 
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterview={event => props.setInterviewer(interviewer.id)}
        setInterview={props.setDay}

      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
};

