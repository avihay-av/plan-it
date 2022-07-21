import React from 'react'

function PlanItem({plan}) {

  return (
    <li>
        <h1>{plan.title}</h1>
        <h2>{plan.place}</h2>
        <h3>{plan.date}</h3>
        {plan.partifications.map(partification => <p key={partification}>{partification}</p>)}
    </li>
  )
}

export default PlanItem