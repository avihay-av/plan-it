import axios from "axios";

const url = "http://localhost:8083/plans";

export const fetchPlans = async () => axios.get(url);