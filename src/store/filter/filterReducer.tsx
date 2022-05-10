import { IAction } from "Interface/ITask";

export const FILTER_COMPLETE = 'FILTER_COMPLETE';
export const FILTER_ACTIVE = 'FILTER_ACTIVE';
export const FILTER_ALL = 'FILTER_ALL';
export const SET_FILTER_STATUS = 'SET_FILTER_STATUS';
export const SET_PAGE_STATUS = 'SET_PAGE_STATUS';
export const SET_PAGE = 'SET_PAGE';

type InitialStateType = {
    status: typeof FILTER_ALL | typeof FILTER_COMPLETE | typeof FILTER_ACTIVE
    currentPage: number,
    pageSize: number,
}

const initialState: InitialStateType = {
    status: FILTER_ALL,
    currentPage: 1,
    pageSize: 3,
};

export const filterStatusReducer = (state = initialState, { type, payload }: IAction): InitialStateType => {
    switch (type) {
        case SET_FILTER_STATUS:
            return {
                ...state,
                status: payload,
            };
        case SET_PAGE_STATUS:
            return {
                ...state,
                status: payload.status,
                currentPage: payload.page,
            };
        case SET_PAGE:
            return {
                ...state,
                currentPage: payload,
            };
        default:
            return state;
    }
}