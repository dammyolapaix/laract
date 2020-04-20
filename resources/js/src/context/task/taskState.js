import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import { GET_TASKS, DELETE_TASK, ADD_TASK } from "../types";
import Axios from "axios";

const TaskState = props => {
    const initialState = {
        tasks: []
    };

    const [state, dispatch] = useReducer(taskReducer, initialState);

    const getContacts = async () => {
        try {
            const res = await Axios.get("/api/task");
            console.log(res.data);
            // dispatch({ type: GET_TASK, payload: res.data });
            // Axios.get("/api/task").then(res => console.log(res.data));
        } catch (error) {
            console.error();
        }
    };

    const addContact = task => {
        task.id += 1;
        dispatch({ type: ADD_TASKS, payload: task });
    };

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks
                // getContacts
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;
