import React, { useState, useEffect } from "react";
import "components/Appointment/styles.scss";

export default function Appointment(props) {
  return (
    <header className="appointment__time">
      <h4 className="text--semi-bold">{props.time}</h4>
      <hr className="appointment__seperator" />
    </header>
    
  );
}