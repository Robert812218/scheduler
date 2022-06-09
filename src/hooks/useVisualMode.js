import { useState } from "react";
const { exportAllDeclaration } = require("@babel/types");

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(mode, replace = false) {
    setHistory((prev) => replace ? [...prev.slice(0, -1), mode] : [...prev, mode] );
  }
  
  function back() {
    setHistory((prev) => (prev.length > 1) ? [...prev.slice(0, -1)] : prev);
  }

  return { mode: history[history.length - 1], transition, back };
}