import React from "react"

function AddComponent(props){
    return (
        <div className="AC-bkg" style={{display : props.visibility ? "block":"none"}}>
            Form
        </div>
    );
}

export default AddComponent;