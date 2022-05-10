import React from "react";
import ReactDOM from "react-dom";

interface IPortal {
    children: React.ReactNode;
}

const Portal: React.FC<IPortal> = ({ children }) => {
    console.log('children', children)

    const el = document.getElementById('portal') as HTMLElement;

    return ReactDOM.createPortal(children, el);
};

export default Portal;