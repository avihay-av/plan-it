const plansReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL_PLANS":
            return action.payload;
        case "CREATE_PLAN":
            return [...state, action.payload];
        case "UPDATE_PLAN":
            return state.map(plan => plan._id === action.payload._id ? action.payload : plan);
        case "DELETE_PLAN":
            return state.filter(plan => plan._id !== action.payload);
        default:
            return state;
    }

};

export default plansReducer;


