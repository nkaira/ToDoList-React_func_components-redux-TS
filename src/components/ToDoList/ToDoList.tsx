import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "store/index";
import Pagination from "components/Pagination/Pagination";
import FilterPanel from "components/FilterPanel/FilterPanel";
import ControlPanel from "components/ControlPanel/ControlPanel";
import TaskList from "components/TaskList/TaskList";
import Modal from "components/Modal/Modal"
import useTypedSelector from "store/useTypedSelector";
import { ITask } from "Interface/ITask";
import {
    addTaskAction, removeTaskAction, completeTaskAction,
    completeAllAction, deleteAllAction,
} from "store/tasks/tasksActions";
import {
    setPageAction, setPageStatusAction, setFilterStatus
} from "store/filter/filterActions";
import { FILTER_ALL, FILTER_COMPLETE, FILTER_ACTIVE } from "store/filter/filterReducer";

export const ToDoList = () => {

    const dispatch: AppDispatch = useDispatch()
    const tasks = useTypedSelector(state => state.tasksReducer.tasks);
    const { currentPage, status, pageSize } = useTypedSelector(state => state.filterStatusReducer);

    const [inputValue, setInputValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [targetTaskId, setTargetTaskId] = useState<number | null>(null);

    const getFilteredTasks = (tasks: Array<ITask>): Array<ITask> => {
        if (status === FILTER_ALL) {
            return tasks;
        } else if (status === FILTER_ACTIVE) {
            return tasks.filter(task => {
                if (task.complete === false) {
                    return task;
                };
            });
        } else if (status === FILTER_COMPLETE) {
            return tasks.filter(task => {
                if (task.complete === true) {
                    return task;
                };
            });
        };
        return tasks;
    };

    const getPaginatedTasks = (filteredTasks: Array<ITask>): Array<ITask> => {
        const prevPage = currentPage - 1;
        const start = pageSize * prevPage;
        const end = start + pageSize;
        const paginatedItems = filteredTasks.slice(start, end);
        return paginatedItems;
    };

    const filteredTasks = getFilteredTasks(tasks);
    const paginatedTasks = getPaginatedTasks(filteredTasks);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        const task = {
            taskId: Date.now(),
            title: inputValue,
            complete: false,
        }
        dispatch(addTaskAction(task));
        setInputValue('');
    };

    const handleDeleteAll = () => {
        const filterStatus = FILTER_ALL;
        const page = 1;
        dispatch(deleteAllAction());
        dispatch(setPageStatusAction(filterStatus, page));
    };

    const handleCompleteAll = () => {
        dispatch(completeAllAction());
    };

    const setCurrentPage = () => {
        const filteredTasks = getFilteredTasks(tasks);
        const paginatedTasks = getPaginatedTasks(filteredTasks);
        const page = (paginatedTasks.length - 1 === 0) ? currentPage - 1 : currentPage;
        dispatch(setPageAction(page));
    };

    const handleCompleteTask = (targetId: number) => {
        dispatch(completeTaskAction(targetId));
        if (status === FILTER_ALL) {
            return;
        }
        setCurrentPage();
    };

    const handleModalShow = (targetId: number) => {
        setIsOpen(true);
        setTargetTaskId(targetId);
    };

    const handleModalCancel = () => {
        setIsOpen(false);
        setTargetTaskId(null);
    };

    const handleModalOk = () => {
        dispatch(removeTaskAction(targetTaskId!));
        setCurrentPage();
        setIsOpen(false);
        setTargetTaskId(null);
    };

    const handlePaginationButton = (page: number) => {
        dispatch(setPageAction(page));
    };

    const handleChangeFilter = (filterStatus: string) => {
        dispatch(setFilterStatus(filterStatus));
        dispatch(setPageAction(1));
    };

    return (
        <div>
            <ControlPanel
                onAdd={handleAdd}
                onInput={handleInput}
                onDeleteAll={handleDeleteAll}
                onCompleteAll={handleCompleteAll}
                inputValue={inputValue}
            />
            <TaskList
                onModalShow={handleModalShow}
                paginatedTasks={paginatedTasks}
                onComplete={handleCompleteTask}
            />
            <Pagination
                filteredTasks={filteredTasks}
                onClick={handlePaginationButton}
            />
            <FilterPanel
                onChange={handleChangeFilter}
            />
            {isOpen &&
                <Modal
                    onCancel={handleModalCancel}
                    onOk={handleModalOk}
                />
            }
        </div>
    );
};

export default ToDoList;