import React from "react";

import {
    ADD_TASK, REMOVE_TASK, COMPLETE_TASK,
    COMPLETE_ALL_TASKS, DELETE_ALL_TASKS, SET_TASK
} from "store/tasks/tasksReducer";

export interface ITask {
    taskId: number,
    title: string,
    complete: boolean,
}

export interface IAction {
    type: string,
    payload: any
}

export interface ITaskList {
    paginatedTasks: Array<ITask>
    onComplete: (taskId: number) => void
    onModalShow: (taskId: number) => void
}

export interface ITaskComponent {
    onComplete: (e: React.MouseEvent<HTMLButtonElement>) => void
    onModalShow: (e: React.MouseEvent<HTMLButtonElement>) => void
    isComplete: boolean
    description: string
    id: number
}

export interface IAddTaskAction {
    type: typeof ADD_TASK
    payload: ITask
}

export interface IRemoveTaskAction {
    type: typeof REMOVE_TASK
    payload: number | null
}

export interface ICompleteTaskAction {
    type: typeof COMPLETE_TASK
    payload: number
}

export type AllActionType = {
    type: typeof DELETE_ALL_TASKS | typeof COMPLETE_ALL_TASKS
    payload: null
}

export interface ISetTasksAction {
    type: typeof SET_TASK
    payload: Array<ITask>
}