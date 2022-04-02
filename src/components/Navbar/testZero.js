import React from "react";
import { Outlet } from "react-router-dom";

class TestZero extends React.Component {
    render() {
        return (
            <div>
                <h1>TEST ZERO</h1>
                <Outlet />
            </div>
        );
    };
};

export default TestZero;