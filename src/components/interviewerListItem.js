import React from "react";
import classNames from "classnames";
import './interviewerListItem.scss'

export default function InterviewerListItem(props) {
  let interviewerListItemClass = classNames({
    "interviewers__item": true,
    "interviewers__item--selected": props.selected
  })

  return (
      <li className={interviewerListItemClass} onClick={() => props.setInterviewer(props.id)}>
        <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
        />
        {props.selected && props.name}
      </li>
  );
}

// Compass says return() should be:
// return (
//   <li className={interviewerClass} onClick={props.setInterviewer}>
//     <img
//       className="interviewers__item-image"
//       src={props.avatar}
//       alt={props.name} 
//     />
//     {props.selected && props.name}
//   </li>
// );