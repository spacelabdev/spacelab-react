import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import "./globalStyles.scss";
import App from "./App";
import history from "./history";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
