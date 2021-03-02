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
      <button onClick={allComps}>ALL</button>
      {allComp.map(createReq)}
    </div>
  );
}

export default RenderAll;
