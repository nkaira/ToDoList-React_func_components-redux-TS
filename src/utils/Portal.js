import React from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.getElementById('portal');
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(children, this.el);
    };
};

export default Portal;
