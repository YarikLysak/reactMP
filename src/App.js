import React from "react";
import "./App.css";

import {
  HWFunc,
  HWArrowFunc,
  HWComponent,
  HWPureComponent,
  HWCreateComponent,
} from "./components";

const App = () => (
  <main className="App">
    <HWFunc />
    <HWArrowFunc />
    <HWComponent />
    <HWPureComponent />
    {HWCreateComponent}
  </main>
);

export default App;
