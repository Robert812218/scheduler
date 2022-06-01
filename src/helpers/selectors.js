export function getAppointmentsForDay(state, day) {
  let outputArr = [];
  if (state.days.length === 0) {
    return [];
  }

  let stateCheck = 0;
  state.days.forEach(aaa => {
    stateCheck += (day === aaa.names ? 1 : 0 );
  })
  if (stateCheck === 0) {
    return [];
  }
  
  const selectedIDs = state.days.filter(selectedDay => selectedDay.name === day);
  let selectedIDsArr = selectedIDs[0].appointments;
  console.log(`IDsArr: ${selectedIDsArr}`);
  selectedIDsArr.forEach(ident => {
    let selectedAppointment = state.appointments[ident];
    outputArr.push(selectedAppointment);
  })
  console.log(outputArr);
  return outputArr; 
}