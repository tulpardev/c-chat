import React, { forwardRef } from "react";
import "../../styles/Messages.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <div className={isUser ? "message__userCard" : "message__guestCard"}>
        <div className="card-body">
          <h2>
            {!isUser && `${message.username || "İsimsiz Kullanıcı"}: `}
            {message.message}
          </h2>
        </div>
      </div>
    </div>
  );
});

export default Message;
