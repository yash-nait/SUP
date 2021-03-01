import React, {Components, useState} from "react"
import api from '../api'

function AddComponent(props){

    const [comp, setComp] = useState({
        title: '',
        type: '',
        link: '',
        description: ''
    }); 

    const changeTitle = (event) => {
        const {name, value} = event.target;
        setComp(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        console.log(comp);
    }

    const submitComponent = () => {
        api.insertComponent(comp).then(res => {
                console.log("Component inserted successfully");
                setComp({
                    title: '',
                    type: '',
                    link: '',
                    description: ''
                });}
        );
    }

    return (
        <div className="AC-bkg" style={{display : props.visibility ? "block":"none"}}>
            <h1>Suggest a Component</h1>
            <div className="form">
                <div className="form-input">
                    <label htmlFor="title"><h3>Title</h3></label>
                    <input type="text" name="title" className="add-component-input" onChange={changeTitle} value={comp.title}></input><br/>
                </div>

                <div className="form-input">
                    <label htmlFor="type"><h3>Type</h3></label>
                    <input type="text" name="type" className="add-component-input" onChange={changeTitle} value={comp.type}></input><br/>
                </div>

                <div className="form-input">
                    <label htmlFor="link"><h3>Link</h3></label>
                    <input type="text" name="link" className="add-component-input" onChange={changeTitle} value={comp.link}></input><br/>
                </div>

                <div className="form-input">
                    <label htmlFor="description"><h3>Description</h3></label>
                    <textarea type="text" name="description" className="add-component-input" onChange={changeTitle} value={comp.description}></textarea><br/>
                </div>

                <button type="submit" onClick={submitComponent}>Submit</button>
            </div>
        </div>
    );
}

export default AddComponent;