import React from "react";
import { useSearchParams } from "react-router-dom";
import cn from "classnames";

import useTypedSelector from "store/useTypedSelector";
import { IFilterPanel } from "Interface/IFilterPanel";
import { FILTER_ALL, FILTER_COMPLETE, FILTER_ACTIVE } from "store/filter/filterReducer";
import styles from "./filterPanel.module.scss";

const FilterPanel: React.FC<IFilterPanel> = ({ onChange }) => {

    const [_searchParams, setSearchParams] = useSearchParams();
    const status = useTypedSelector(state => state.filterStatusReducer.status);

    const handleClick = (filterStatus: string) => {
        if (filterStatus === status) {
            return;
        }
        setSearchParams({ status: filterStatus, page: '1' });
        onChange(filterStatus);
    };

    const buttonActive = cn(styles.filter__button, { [styles.activeButton]: status === FILTER_ACTIVE });
    const buttonComplete = cn(styles.filter__button, { [styles.activeButton]: status === FILTER_COMPLETE });
    const buttonAll = cn(styles.filter__button, { [styles.activeButton]: status === FILTER_ALL });

    return (
        <section className={styles.filter}>
            <button className={buttonActive} onClick={() => handleClick(FILTER_ACTIVE)}> Active </button>
            <button className={buttonComplete} onClick={() => handleClick(FILTER_COMPLETE)}> Complete </button>
            <button className={buttonAll} onClick={() => handleClick(FILTER_ALL)}> All </button>
        </section>
    );
};

export default FilterPanel;