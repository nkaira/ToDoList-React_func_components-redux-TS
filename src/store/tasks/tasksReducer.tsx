import Storage from "utils/storage";
import { ITask, IAction } from "Interface/ITask";

export const ADD_TASK = 'ADD_TASK';
export const SET_TASK = 'SET_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const COMPLETE_ALL_TASKS = 'COMPLETE_ALL_TASKS';
export const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';

interface InitialStateType {
    tasks: Array<ITask>
}

const initialState: InitialStateType = {
    tasks: [],
};

let tasks: Array<ITask> = [];

export const tasksReducer = (state = initialState, { type, payload }: IAction): InitialStateType => {
    switch (type) {
        case ADD_TASK:
            tasks = state.tasks.concat(payload)
            Storage.setItem('tasks', tasks);
            return {
                ...state,
                tasks,
            }
        case SET_TASK:
            tasks = payload
            Storage.setItem('tasks', tasks);
            return {
                ...state,
                tasks,
            }
        case REMOVE_TASK:
            tasks = [...state.tasks].filter(task => task.taskId !== payload);
            Storage.setItem('tasks', tasks);
            return {
                ...state,
                tasks,
            }
        case COMPLETE_TASK:
            tasks = [...state.tasks].map(task => {
                if (task.taskId === payload) {
                    return { ...task, complete: !task.complete };
                }
                return { ...task };
            })
            Storage.setItem('tasks', tasks);
            return {
                ...state,
                tasks,
            }
        case COMPLETE_ALL_TASKS:
            const completeTasks = [...state.tasks].filter(task => task.complete === true);
            tasks = [...state.tasks].map(task => {
                if (completeTasks.length === state.tasks.length) {
                    task.complete = !task.complete;
                } else {
                    task.complete = true;
                }
                return task;
            })
            Storage.setItem('tasks', tasks);
            return {
                ...state,
                tasks,
            }
        case DELETE_ALL_TASKS:
            Storage.setItem('tasks', []);
            return state = initialState;
        default:
            return state;
    }
}