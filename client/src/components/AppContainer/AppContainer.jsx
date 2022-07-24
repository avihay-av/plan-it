import {useState, useEffect} from 'react'
import {fetchPlans} from '../../api/plan'
import InputPlans from '../InputPlans/InputPlans'
import PlansList from '../PlansList/PlansList'
import CardList from '../Card/CardList'
import Footer from '../Footer/Footer'

function AppContainer() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    fetchPlans().then(fetchedPlans => {
      setPlans(fetchedPlans)
    })
  },[])

  return (
    
    <div className="App">
      <CardList/>
      {/* <InputPlans/> */}
      <PlansList plans={plans}/>
      <Footer/>
    </div>
  )
}

export default AppContainer