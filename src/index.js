import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Application from "components/Application";
import DayListItem from "components/DayListItem";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

ReactDOM.render(<Application />, document.getElementById("root"));


storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />)
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />)
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("setDay")} spots={5} />
  ));