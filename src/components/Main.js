import React from "react";
import ReactDOM from "react-dom";

const Main = () => <div>HELLO!</div>;

export default Main;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;
