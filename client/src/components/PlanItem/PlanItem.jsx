import React, { useState } from 'react'
import PlansList from '../PlansList/PlansList';

function PlanItem({plan}) {
  const [planEvent,setplanEvent] = useState(plan);
    const handleInputOnChange = (event) =>{
      setplanEvent(event.target.value);
    }

    
  return (
    <li>
    <div>
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
        </div>
    </li>
  )
}

export default PlanItem