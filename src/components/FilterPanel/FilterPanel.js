import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames";
import cnBind from "classnames/bind";

import { withUseRouter } from "hoc/withUseRouter";
import { FILTER_ALL, FILTER_COMPLETE, FILTER_ACTIVE } from "store/filter/filterReducer";
import styles from "./filterPanel.module.scss";

// const cx = cnBind.bind(styles); // для примера

class FilterPanel extends React.Component {

    handleClick(status) {
        const { onChange, setSearchParams } = this.props;
        setSearchParams({ status, page: 1 });
        onChange(status);
    }

    render() {
        const { status } = this.props;
        const buttonActive = cn(styles.filter__button, { [styles.activeButton]: status === FILTER_ACTIVE });
        const buttonComplete = cn(styles.filter__button, { [styles.activeButton]: status === FILTER_COMPLETE });
        const buttonAll = cn(styles.filter__button, { [styles.activeButton]: status === FILTER_ALL });
        // const buttonComplete = cx('filter__button', { 'activeButton': status === FILTER_COMPLETE }); // для примера

        return (
            <section className={styles.filter}>
                <button className={buttonActive} onClick={() => this.handleClick(FILTER_ACTIVE)}> Active </button>
                <button className={buttonComplete} onClick={() => this.handleClick(FILTER_COMPLETE)}> Complete </button>
                <button className={buttonAll} onClick={() => this.handleClick(FILTER_ALL)}> All </button>
            </section>
        );
    };
};

FilterPanel.propTypes = {
    onChange: PropTypes.func,
    setSearchParams: PropTypes.func,
};

export default withUseRouter(connect(state => ({
    status: state.filterStatusReducer.status,
}),
)(FilterPanel));