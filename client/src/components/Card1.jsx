import React from "react";
import SearchBar from "./SearchBar";

function Card1(){
    return(
        <div className="card-bkg">
            <div className="card-overlay">
                <div className="card-header">
                    <h1 className="card-title" style={{color: "#996fcd"}}>Search Bar</h1>
                    <h3 className="card-title">Created By: SUP</h3>
                    <button className="link-button">Link</button>
                </div>
                <div className="component-bkg">
                    <SearchBar />
                </div>
            </div>
            
        </div>
    );
}

export default Card1;