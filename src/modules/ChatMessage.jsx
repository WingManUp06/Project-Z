import React from "react";
import './Chat.css';

function ChatMessage(props){
    return (
        <>
            <div className = 'ChatMessage'>
                <p>{props.msg}</p>
                <img alt = '' src = {props.photoURL}/>
            </div>
        </>
    )
}

export default ChatMessage;