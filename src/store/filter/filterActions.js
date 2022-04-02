import { SET_PAGE, SET_PAGE_STATUS, SET_FILTER_STATUS } from './filterReducer';

export const setPageAction = page => ({
    type: SET_PAGE,
    payload: page,
});

export const setPageStatusAction = (status, page) => ({
    type: SET_PAGE_STATUS,
    payload: { status, page }
});

export const setFilterStatus = (status) => ({
    type: SET_FILTER_STATUS,
    payload: status,
})

