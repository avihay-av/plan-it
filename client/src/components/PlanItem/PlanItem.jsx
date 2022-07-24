import React, { useState } from 'react'
import PlansList from '../PlansList/PlansList';
import "./PlanItem.css"

function PlanItem({plan}) {
  const [planEvent,setplanEvent] = useState(plan);
    const handleInputOnChange = (event) =>{
      setplanEvent(event.target.value);
    }
    
    // const enterPalnInput =  (plan) => {
    //   const array = [];
    //    array.map(plan => array.push(<p>{plan}</p>));
    //    return array
    // } 

    function deletePlan(id){
      
    }
    
  return (
    <ul className=''>
    <div className='input-div'>
    <input 
            className="inputText"
            type="text"
            readOnly={true}
            value = {plan.title}
            onChange={handleInputOnChange}
            
          />


        <h1>{plan.title}</h1>
        <h2>{plan.place}</h2>
        <h3>{plan.date}</h3>
        
        {plan.partifications.map(partification => <p key={partification}>{partification}</p>)}

        <button
            className="deleteButton"
            onClick={deletePlan}
            fontSize="inherit"
          >🗑️</button>
        </div>
    </ul>
  )
}

export default PlanItem