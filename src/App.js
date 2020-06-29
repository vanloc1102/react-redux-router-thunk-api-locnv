import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showContentMenu(routes)}
                        </div>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };
}
