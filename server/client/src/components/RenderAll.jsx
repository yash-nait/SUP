import React, {useState} from 'react'
import api from '../api'
import RequestDiv from './RequestDiv';

function RenderAll(){

  const [allComp, setAllComp] = useState([]);

  const allComps = () => {
    api.getAllComponents().then((comps) => {
      console.log(comps.data.data);
      setAllComp(comps.data.data)
    })
  }

  const createReq = (vari) => {
    return <RequestDiv 
      key = {vari._id}
      title = {vari.title}
      type = {vari.type}
      link = {vari.link} 
      desc = {vari.description}
    />;
  }

  return (
    <div>
      <div className="render-all-button-div"><button onClick={allComps} className="render-all-button">All Components</button></div>
      {allComp.map(createReq)}
    </div>
  );
}

export default RenderAll;
