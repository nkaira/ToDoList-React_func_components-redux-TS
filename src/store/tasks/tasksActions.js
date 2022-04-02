
import {
    ADD_TASK, REMOVE_TASK, COMPLETE_TASK,
    COMPLETE_ALL_TASKS, DELETE_ALL_TASKS, SET_TASK
} from './tasksReducer';

export const addTaskAction = newTask => ({
    type: ADD_TASK,
    payload: newTask,
});

export const removeTaskAction = targetId => ({
    type: REMOVE_TASK,
    payload: targetId,
});

export const completeTaskAction = targetId => ({
    type: COMPLETE_TASK,
    payload: targetId,
});

export const deleteAllAction = () => ({
    type: DELETE_ALL_TASKS,
});

export const completeAllAction = () => ({
    type: COMPLETE_ALL_TASKS,
});

export const setTasksAction = tasks => ({
    type: SET_TASK,
    payload: tasks,
});