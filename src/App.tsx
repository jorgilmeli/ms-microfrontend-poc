import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { MfList } from './components/mf-list';

const App = () => (
  <div className="mt-10 px-5 text-3xl mx-auto max-w-6xl">
    <MfList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
