import React from 'react';
import "./TaskList.css"
const TaskList = ({ tasks, handleDelete }) => (
    <div className="main-div">
        <ul className="p-0 ul-item">
            {tasks.map((task, index) => (
                <li className="list-item" key={index}>
                    {task.name}
                    <button className="list-item-btn ms-1" onClick={() => handleDelete(index)}>
                        X
                    </button>
                </li>
            ))}
        </ul>
    </div>
);

export default TaskList;
