import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div>
                    <Link to="test1">test 1</Link>
                </div>
                <div>
                    <Link to="test2">test 2</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;