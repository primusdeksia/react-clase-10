import { ACTIONS } from "../../Inventory/CounterActions";

const initialState = 0

const counter = (state = initialState, action) => {
    // Mediante switch ejecuto acciones de acuerdo al valor de typo de action
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + 1;
        case ACTIONS.DECREMENT:
            return state - 1    
        default:
            return state;
    }
}

export default counter