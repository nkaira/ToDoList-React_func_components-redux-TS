import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./controlPanel.module.scss";

class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    };

    handleAdd = () => {
        this.props.onAdd();
        this.inputRef.current.focus();
    }

    render() {
        const { onCompleteAll, onDeleteAll, onInput, inputValue } = this.props;
        const interfaceInput = cn(styles.interface, styles.interface__input);
        const interfaceButton = cn(styles.interface, styles.interface__button);

        return (
            <section className={styles.container}>
                <button className={interfaceButton} onClick={onCompleteAll}> Complete
                    all </button>
                <button className={interfaceButton} onClick={onDeleteAll}> Delete
                    all </button>
                <input ref={this.inputRef} type="text" placeholder="Text" value={inputValue} className={interfaceInput} onChange={onInput} />
                <button className={interfaceButton} onClick={this.handleAdd}> Add </button>
            </section>
        );
    };
};

ControlPanel.propTypes = {
    onCompleteAll: PropTypes.func,
    onDeleteAll: PropTypes.func,
    onInput: PropTypes.func,
    onAdd: PropTypes.func,
    inputValue: PropTypes.string,
};

export default ControlPanel;