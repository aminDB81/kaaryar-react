import "./AppContainer.css"
import {Fragment} from "react";
import Header from "../Header/Header";
import TaskListView from "../TaskListView/TaskListView";

const AppContainer = () => {

    return (
        <>
            <section className="container">
                <div className="todo-card">
                    <Header/>
                    <TaskListView/>
                </div>
            </section>
        </>
    )
}
export default AppContainer;