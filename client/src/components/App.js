import React from "react";
import Navbar from "./Navbar"
import Landing from "./Landing"
import SearchBar from "./SearchBar";
import Card from "./Card";
import AddButton from "./AddButton";


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
      <AddButton />
    </div>
  );
}

export default App;
