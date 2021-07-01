import React, { useState, useEffect } from "react";
import "../../styles/ChatPage.css";
import { useAuth } from "../../contexts/AuthContext";
import Message from "../cssComponents/Messages";
import { db } from "../../components/root/firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import cchatLogo from "../../utils/cchatLogo.png";
function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    setUsername(currentUser.email);
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="chatpage">
      <div className="chatpage__header">
        <img className="chatpage__logo" src={cchatLogo} alt="chat logo" />
        <h3 className="chatpage__header__title">Hoşgeldin {username}</h3>
      </div>

      <form className="chatpage__form">
        <input
          type="text"
          className="form-control border chatpage__input"
          name="message-text"
          placeholder="Birşeyler yaz..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className="btn btn-success"
          disabled={!input}
          type="submit"
          onClick={sendMessage}
        >
          GÖNDER
        </button>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default ChatPage;
