import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  let outputList = props.days.map(day => {
    return (
      <DayListItem 
        key={day.id}
        name={day.name}
        spots={day.spot}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return <ul>{outputList}</ul>;
};

