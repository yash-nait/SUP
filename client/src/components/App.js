import React from "react";
import Navbar from "./Navbar"
import Landing from "./Landing"
import SearchBar from "./SearchBar";


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
    </div>
  );
}

export default App;
