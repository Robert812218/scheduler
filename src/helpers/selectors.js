import InterviewerList from "components/interviewerList";

export function getAppointmentsForDay(state, day) {
  const selectedObjEins = state.days.find(({dayName}) => dayName === day);
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

export function getInterviewersForDay(state, day) {
  let interviewerDaysArr = [];
  let outputArr = [];

  for (const i in state.days) {
    let thisOne = state.days[i];
    if (thisOne.name === day) {
      interviewerDaysArr.push(thisOne.interviewers);
    }
  }
  console.log(interviewerDaysArr[0]);
  for (const j of interviewerDaysArr[0]) {
    let intvs = state.interviewers[j];
    outputArr.push(intvs);
  }
  console.log(outputArr);
  return outputArr;
}