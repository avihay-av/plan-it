import {useState, useEffect} from 'react'
import {fetchPlans} from '../../api/plan'
import PlansList from '../PlansList/PlansList'


function AppContainer() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    //prevent from rendering twice react 18
    
    fetchPlans().then(fetchedPlans => {
      setPlans(fetchedPlans)
    })
  },[])

  return (
    
    <div>
      
      <PlansList plans={plans}/>
    </div>
  )
}

export default AppContainer