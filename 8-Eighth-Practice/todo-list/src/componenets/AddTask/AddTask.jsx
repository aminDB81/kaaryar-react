import React from 'react';
import "./AddTask.css"

const NewTaskForm = ({ newTask, setNewTask, handleAdd, handleKeyPress }) => (
    <div className="NewTask">
        <form className="Add-Task">
            <input
                className="input"
                placeholder=" کار جدید ..."
                value={newTask.name}
                onChange={(e) => setNewTask({ name: e.target.value })}
                onKeyPress={handleKeyPress}
            />
        </form>
    </div>
);

export default NewTaskForm;
