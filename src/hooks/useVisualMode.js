import { useState } from "react";
const { exportAllDeclaration } = require("@babel/types");

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState(initial);

  function transition(mode, replace = false) {}
  function back() {}

  return { mode, transition, back };
}