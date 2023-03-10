import React, { useState } from "react";
import Quicklogin from"../../components/auth/login/quicklogin/Quicklogin";
import Passwordlogin from "../auth/login/passwordlogin/Passwordlogin";
import "./Taps.css";
const Taps = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Quick Login
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Password Login
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <Quicklogin/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Passwordlogin/>
        </div>
      </div>
    </div>
  );
};

export default Taps;
