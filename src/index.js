import React from "react";
import ReactDOM from "react-dom";
import "index.scss";
import Application from "components/Application";
import DayListItem from "components/DayListItem";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

ReactDOM.render(<Application />, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Application />
// );