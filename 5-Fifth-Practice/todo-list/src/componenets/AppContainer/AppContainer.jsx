import "./AppContainer.css"
import {Fragment} from "react";
import Header from "../Header/Header";
import TaskList from "../TaskList/TaskList";
import Buttons from "../Buttens/Buttons";

const AppContainer = () => {
    return (
        <>
            <section className="container">
                <div className="todo-card">
                    <Header/>
                    <TaskList/>
                    <Buttons/>
                </div>
            </section>
        </>
    )
}
export default AppContainer;