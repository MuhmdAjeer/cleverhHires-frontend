import React from "react";
import { BrowserRouter as Router, } from "react-router-dom";
import Toast from "./components/Toast";
import Routed from './Routes'



function App() {
  return (
    <>
      <Toast />
      <Router>
        <Routed />
      </Router>
    </>
  );
}

export default App;
