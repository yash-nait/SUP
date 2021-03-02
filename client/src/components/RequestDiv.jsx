import React from "react";

function RequestDiv(props){
    return (
        <div className="req-bkg">
            <div className="req-content">
                <h2 className="req-title">{props.title}</h2>
                <h4 className="req-detail">Type: {props.type}</h4>
                <h4 className="req-detail">Description: {props.desc}</h4>
                <div className="req-link-div">
                    <a href={"https://"+props.link}><button className="req-link">Link</button></a>
                </div>
            </div>
        </div>
    )
}

export default RequestDiv; 