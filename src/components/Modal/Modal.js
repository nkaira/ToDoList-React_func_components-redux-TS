import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Portal from "utils/Portal";
import styles from "./modal.module.scss";

class Modal extends React.Component {

    render() {
        const { onOk, onCancel } = this.props;
        const buttonOk = cn(styles.button, styles.button__ok);

        return (
            <Portal>
                <div className={styles.modal}>
                    <div className={styles.modal__window}>
                        <div className={styles.modal__body}>
                            <h2>Are you sure want to delete the task?</h2>
                        </div>
                        <div className={styles.modal__footer}>
                            <button className={buttonOk} onClick={onOk}> Ok </button>
                            <button className={styles.button} onClick={onCancel}> Cancel </button>
                        </div>
                    </div>
                </div>
            </Portal>
        )
    };
};

Modal.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default Modal;