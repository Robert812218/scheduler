export function getAppointmentsForDay(state, day) {
  const selectedObjEins = state.days.find(({name}) => name === day);
  if (!selectedObjEins) return [];
  return selectedObjEins.appointments.map(x => state.appointments[x]);
}

export function getInterview(state, interview) {
  console.log(interview);
}