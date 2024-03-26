import React from "react";
import Header from "./comps/header/Header";
import Sidebar from "./comps/sidebar/Sidebar";
import "./css/index.css";
import Body from "./comps/body/Body";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Body />
    </React.Fragment>
  );
};

export default App;
