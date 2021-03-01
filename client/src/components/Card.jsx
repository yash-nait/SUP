import React from "react";

function Card(){
    return(
        <div className="card-bkg">
            <div className="card-overlay">
                <div className="card-header">
                    <h1 className="card-title" style={{color: "#996fcd"}}>Navbar</h1>
                    <h3 className="card-title">Created By: *Name*</h3>
                    <button className="link-button">Link</button>
                </div>
                <div></div>
            </div>
            
        </div>
    );
}

export default Card;