import React from "react";
import Navbar from "./Navbar"
import Landing from "./Landing"
import SearchBar from "./SearchBar";
import Card from "./Card";
import Add from "./Add";
import RenderAll from "./RenderAll"

function App() {
  return (
    <div>
      <Navbar
        logo="SUP"
        linkText="About us"
        link=""
      />
      <Landing />
      <SearchBar />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Add />
      <RenderAll />
    </div>
  );
}

export default App;
