
import {
    ADD_TASK, REMOVE_TASK, COMPLETE_TASK,
    COMPLETE_ALL_TASKS, DELETE_ALL_TASKS, SET_TASK
} from './tasksReducer';
import {
    ITask, IAddTaskAction, AllActionType,
    IRemoveTaskAction, ICompleteTaskAction, ISetTasksAction
} from 'Interface/ITask';

export const addTaskAction = (newTask: ITask): IAddTaskAction => ({
    type: ADD_TASK,
    payload: newTask,
});

export const removeTaskAction = (targetId: number): IRemoveTaskAction => ({
    type: REMOVE_TASK,
    payload: targetId,
});

export const completeTaskAction = (targetId: number): ICompleteTaskAction => ({
    type: COMPLETE_TASK,
    payload: targetId,
});

export const deleteAllAction = (): AllActionType => ({
    type: DELETE_ALL_TASKS,
    payload: null
});

export const completeAllAction = (): AllActionType => ({
    type: COMPLETE_ALL_TASKS,
    payload: null
});

export const setTasksAction = (tasks: Array<ITask>): ISetTasksAction => ({
    type: SET_TASK,
    payload: tasks,
});