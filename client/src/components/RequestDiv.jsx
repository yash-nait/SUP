import React from "react";

function RequestDiv(props){
    return (
        <div className="req-bkg">
            <h3>{props.title}</h3>
            <h4>{props.type}</h4>
            <a href={"https://"+props.link}><button>{props.link}</button></a>
            <h4>{props.desc}</h4>
        </div>
    )
}

export default RequestDiv; 