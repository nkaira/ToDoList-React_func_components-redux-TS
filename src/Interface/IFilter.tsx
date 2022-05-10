import { SET_PAGE, SET_PAGE_STATUS, SET_FILTER_STATUS } from "store/filter/filterReducer";

export interface IsetPageAction {
    type: typeof SET_PAGE
    payload: number
}

export interface IsetPageStatusAction {
    type: typeof SET_PAGE_STATUS
    payload: {
        status: string
        page: number
    }
}

export interface IsetFilterStatus {
    type: typeof SET_FILTER_STATUS
    payload: string
}