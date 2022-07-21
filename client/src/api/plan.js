import axios from "axios";

const url = "http://localhost:8083/plan";

export const fetchPlans = async () =>{ 
    let data
    await axios.get(url).then(res => {
        data = res.data
    })
    return data.plans;
}