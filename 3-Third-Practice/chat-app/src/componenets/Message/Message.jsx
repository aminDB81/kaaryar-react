import React from "react";
import messages from "../../data/messages.json";
import "./Message.css";

const renderMessage = (message) => {
    const messageStyle = {
        margin: "10px",
        backgroundColor: message.isPeer === true ? "#12A3CC" : "#DB0142",
        color: "#FFF",
        width: "max-content",
        maxWidth: "50%",
        height: "auto",
        textAlign: "center",
        borderRadius:"50px",
        position: "sticky",
        right: message.isPeer === true ? "34rem" : "0",
        borderBottomRightRadius: message.isPeer === true ? "50px" : "0px",
        borderBottomLeftRadius: message.isPeer === true ? "0px" : "50px"
    };

    return (
        <div className="messageBody-div" key={message.id} style={messageStyle}>
            <p className="messageBody">{message.body}</p>
        </div>
    );
}

const renderMessages = () => {
    return messages.map((message) => renderMessage(message)); // Return the array of rendered messages
}

const Message = () => {
    return <div>{renderMessages()}</div>;
};

export default Message;
