import InterviewerList from "components/interviewerList";

export function getAppointmentsForDay(state, day) {
  let arr = [];
  let resultsArr = [];

  state.days.forEach((selectedDay) => {
    if (selectedDay.name === day) {
      arr = selectedDay.appointments;
    }
  })
  arr.forEach((item) => {
    if (state.appointments[item]) {
      resultsArr.push(state.appointments[item]);
    }
  })
  return resultsArr;
}

export function getInterview(state, interview) {
  console.log(state);
  if (!interview) return null;
  const newInterview = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  };

  console.log(newInterview);
  return newInterview;
}

export function getInterviewersForDay(state, day) {
  let arr = [];
  let resultsArr = [];

  state.days.forEach((selectedDay) => {
    if (selectedDay.name === day) {
      arr = selectedDay.interviewers;
    }
  })
  arr.forEach((item) => {
    if (state.interviewers[item]) {
      resultsArr.push(state.interviewers[item]);
    }
  })

  return resultsArr;
}