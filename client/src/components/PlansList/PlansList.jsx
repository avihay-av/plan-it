import PlanItem from "../PlanItem/PlanItem"

function PlansList({plans}) {

    const renderItem = plans.map(plan => <PlanItem key={plan.id} plan={plan}/>)

    return (
        <div className="">
        <ul>{renderItem}</ul>
        </div>
        
    )
}

export default PlansList