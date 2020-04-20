import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About.js";
import TaskState from "./context/task/taskState";

const App = () => {
    return (
        <TaskState>
            <Router>
                <Fragment>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </TaskState>
    );
};

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
