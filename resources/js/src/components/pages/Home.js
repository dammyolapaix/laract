import React from "react";
import { Link } from "react-router-dom";
import Tasks from "../tasks/Tasks";
import TaskForm from "../tasks/taskForm";

const Home = () => {
    return (
        <div>
            <h1>welcome page</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div className="row">
                <div className="col-md-6">
                    <TaskForm />
                </div>
                <div className="col-md-6">kkkk</div>
            </div>
            {/* <div>hh</div> */}
            <Tasks />
        </div>
    );
};

export default Home;
