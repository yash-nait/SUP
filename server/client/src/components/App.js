import React from "react";
import Navbar from "./Navbar"
import Landing from "./Landing"
import SearchBar from "./SearchBar";
import Add from "./Add";
import RenderAll from "./RenderAll";
import PreRendered from "./PreRendered";

function App() {
  return (
    <div>
      <Navbar
        logo="SUP"
        linkText="About us"
        link=""
      />
      <Landing />
      <div className="heading">
        <h1>Top Components</h1>
      </div>
      <PreRendered />
      <hr />
      <Add />
      <RenderAll />
    </div>
  );
}

export default App;
