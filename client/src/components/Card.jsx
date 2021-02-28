import React from "react";

function Card(){
    return(
        <div className="card-bkg">
            <div className="card-overlay">
                <div className="card-header">
                    <h1 className="card-title" style={{color: "#996fcd"}}>Navbar</h1>
                    <h3 className="card-title">Created By: *Name*</h3>
                    <button>Link</button>
                </div>
                <div></div>
            </div>
            {/* <h6>Created By:</h6>
            <button>Copy</button> */}
        </div>
    );
}

export default Card;