import React from "react";

function SearchBar(){
    return (
        <div className="search_bar-bkg">
            <input className="search_bar" type="text" placeholder="Search for components.." />
            <button className="search_bttn" type="submit">Search</button>
        </div>
    );
}

export default SearchBar;