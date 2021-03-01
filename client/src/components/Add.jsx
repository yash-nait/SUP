import React,{useState} from "react";
import AddComponent from "./AddComponent";

function AddButton(){

    const [visi, setVisi] = useState(0);

    const changeVisi = () => {
        setVisi(1-visi);
    }

    return (
        <div className ="sticky">
            <AddComponent visibility={visi}/>
            <button className="add-button" onClick={changeVisi}>
                +
            </button>
        </div>
    );
}

export default AddButton