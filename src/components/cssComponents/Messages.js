import React, { forwardRef } from "react";
import "../../styles/Messages.css";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <div className={isUser ? "message__userCard" : "message__guestCard"}>
        <div className="card-body">
          <h3 className="text-wrap">
            {!isUser && `${message.username || "İsimsiz Kullanıcı"}: `}
            {message.message}
          </h3>
        </div>
      </div>
    </div>
  );
});

export default Message;
