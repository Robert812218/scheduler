import React from "react";
import { render, cleanup } from "@testing-library/react";
import Application from "components/Application";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

afterEach(cleanup);

it("renders without crashing", () => {
  render(<Application />);
});
