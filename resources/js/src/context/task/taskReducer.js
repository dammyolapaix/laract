import { GET_TASKS, ADD_GET_TASK, DELETE_GET_TASK, ADD_TASK } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        default:
            return state;
    }
};
