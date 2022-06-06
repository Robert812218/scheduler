import InterviewerList from "components/interviewerList";

export function getAppointmentsForDay(state, day) {
  const selectedObjEins = state.days.find(({name}) => name === day);
  if (!selectedObjEins) return [];
  return selectedObjEins.appointments.map(x => state.appointments[x]);
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const selectedInterview = state.interview.find(({selInt}) => selInt.interview === interview);
  return selectedInterview.appointments.map(x => state.interview.map([x]));
}