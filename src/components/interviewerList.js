import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import InterviewerListItem from "./interviewerListItem";
import './interviewerList.scss';

export default function InterviewerList(props) {
  console.log(props);
  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        interviewers={props.interviewers}
        setInterviewer={() => props.setInterviewer(interviewer.id)}    
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

InterviewerList.propTypes = {
  value: PropTypes.number,
  interviewers: PropTypes.array.isRequired
}