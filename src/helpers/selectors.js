import InterviewerList from "components/interviewerList";

export function getAppointmentsForDay(state, day) {
  const selectedObjEins = state.days.find(({name}) => name === day);
  if (!selectedObjEins) {
    return []
  };
  const output = selectedObjEins.appointments.map(x => state.appointments[x]);
  return output;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const selectedInterview = state.interview.find(({selInt}) => selInt.interview === interview);
  return selectedInterview.appointments.map(x => state.interview.map([x]));
}

// export function getInterviewersForDay(state, day) {
//   const selectedInterviewer = state.InterviewerList.find(({selIntvr}) => selIntvr.appointments === day);
// }