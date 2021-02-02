import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TrainDepartures from "./components/TrainDeparture/TrainDepartures.Data";
import reportWebVitals from "./reportWebVitals";
import Text from "./components/TextComponent/Text";
import { HEADER_TITLE } from "./api/Constants";

ReactDOM.render(
  <React.StrictMode>
    <div className="pagedata">
      <Text value={HEADER_TITLE} className="headertitle" />
      <TrainDepartures />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
