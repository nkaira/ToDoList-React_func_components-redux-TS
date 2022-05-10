import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import ToDoList from "components/ToDoList/ToDoList";
import TaskDetail from "components/TaskDetail/TaskDetail";
import Storage from "utils/storage";
import { setTasksAction } from "store/tasks/tasksActions";
import { setPageAction, setFilterStatus } from "store/filter/filterActions";
import styles from "./app.module.scss";

const App = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const tasks = Storage.getItem('tasks');

        if (tasks?.length > 0) {
            dispatch(setTasksAction(tasks));
        };

        const currentPage: string | null = searchParams.get('page');

        if (currentPage) {
            dispatch(setPageAction(Number(currentPage)));
        };

        const status = searchParams.get('status');

        if (status) {
            dispatch(setFilterStatus(status));
        };
    }, []);

    return (
        <div className={styles.header}>
            <h1 className={styles.title}>To Do List</h1>
            <Routes>
                <Route path='/' element={<ToDoList />} />
                <Route path='/:taskId' element={<TaskDetail />} />
            </Routes>
        </div>
    );
};

export default App;
