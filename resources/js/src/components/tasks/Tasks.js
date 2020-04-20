import React, { useContext } from "react";
import TaskContext from "../../context/task/taskContext";

const Tasks = () => {
    const taskContext = useContext(TaskContext);

    const { tasks } = taskContext;
    return (
        <div>
            {tasks.map(task => (
                <div>{task.name}</div>
            ))}
        </div>
    );
};

export default Tasks;
