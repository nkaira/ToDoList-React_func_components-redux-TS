import { SET_PAGE, SET_PAGE_STATUS, SET_FILTER_STATUS } from './filterReducer';

import {
    IsetPageAction, IsetPageStatusAction, IsetFilterStatus,
} from 'Interface/IFilter';

export const setPageAction = (page: number): IsetPageAction => ({
    type: SET_PAGE,
    payload: page,
});

export const setPageStatusAction = (status: string, page: number): IsetPageStatusAction => ({
    type: SET_PAGE_STATUS,
    payload: { status, page }
});

export const setFilterStatus = (status: string): IsetFilterStatus => ({
    type: SET_FILTER_STATUS,
    payload: status,
});

