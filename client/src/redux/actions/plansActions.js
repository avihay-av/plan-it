import * as api from "../api";
import { FETCH_ALL_PLANS } from "./constants";

export const getPlans = () => async (dispatch) => {
    try {
        const { data } = await api.fetchStories();
        dispatch({ type: FETCH_ALL_PLANS, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};
