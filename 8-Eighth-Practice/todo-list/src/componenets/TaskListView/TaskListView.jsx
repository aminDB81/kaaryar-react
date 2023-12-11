import React, { useState, useEffect } from 'react';
import { readJSON, writeJSON } from '../../utils/local-storage';
import works from '../../data/works.json';
import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';
import Buttons from '../Buttons/Buttons';
import "./TaskListView.css";

const TaskListView = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ name: "" });

    useEffect(() => {
        const storedTasks = readJSON('tasks') || works;
        console.log('Stored Tasks:', storedTasks);
        setTasks((prevTasks) => (prevTasks.length === 0 ? storedTasks : prevTasks));
    }, []);

    useEffect(() => {
        writeJSON('tasks', tasks);
    }, [tasks]);

    const handleDelete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const handleDeleteAll = () => {
        setTasks([]);
    };

    const handleAdd = () => {
        if (newTask.name.trim() !== "") {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setNewTask({ name: "" });
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <>
            <TaskList tasks={tasks} handleDelete={handleDelete} />
            <AddTask
                newTask={newTask}
                setNewTask={setNewTask}
                handleAdd={handleAdd}
                handleKeyPress={handleKeyPress}
            />
            <Buttons handleDeleteAll={handleDeleteAll} handleAdd={handleAdd} />
        </>
    );
};

export default TaskListView;
