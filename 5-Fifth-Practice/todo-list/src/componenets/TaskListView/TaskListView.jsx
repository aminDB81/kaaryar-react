import "./TaskListView.css"
import works from "../../data/works.json"
const TaskListView = () => {
    return (
        <div>
            <ul className="p-0 ul-item">
                {works.map((task, index) => (
                    <li className="list-item" key={index}>{task.name} <button className="list-item-btn ms-1">X</button></li>
                ))}
            </ul>
        </div>
    )
}
export default TaskListView