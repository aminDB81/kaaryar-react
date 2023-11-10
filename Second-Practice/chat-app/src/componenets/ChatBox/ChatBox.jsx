import React from "react";
import {Fragment} from "react";
import "./ChatBox.css"
import Action from "../Actions/Action";
import MessageList from "../MessageList/MessageList";


const ChatBox = () => {
    return (
        <>
            <section className="container mt-5">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-12 col-md-7 main-div position-relative">
                        <Action/>
                        <MessageList messages="messages" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default ChatBox;