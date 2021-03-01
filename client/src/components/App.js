import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar"
import Landing from "./Landing"
import SearchBar from "./SearchBar";
import Card from "./Card";
import Add from "./Add";

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
    </div>
  );
}

export default App;
