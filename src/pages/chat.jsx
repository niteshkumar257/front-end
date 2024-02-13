import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Button from "../Components/button";
import { getCurrentTime } from "../utils";

const socket = io("https://backend-202e.onrender.com");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [userId, setUserId] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleMessage = ({ message, id }) => {
      const time = getCurrentTime();
      setMessages((prevMessages) => [...prevMessages, { message, id, time }]);
    };

    socket.on("chat message", handleMessage);

    return () => {
      socket.off("chat message", handleMessage);
    };
  }, []);

  useEffect(() => {
    setUserId(Math.random().toString(36).substring(7));
  }, []);

  const handleMessageSend = () => {
    if (inputText.trim() !== "") {
      socket.emit("chat message", { message: inputText, id: userId });
      setInputText("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleMessageSend();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="app">
      <h1 className="title">Chat Room</h1>
      <div className="chat-container">
        <div className="message-list">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.id === userId ? "own-message" : ""
              }`}
            >
              <div className="message-box">
                <div className="message-content">{message.message}</div>
                <div className="message-time">
                  <span>{message.time}</span>{" "}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-container">
          <input
            className="input-field"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
          />
          <Button buttonText={"Send"} onClick={handleMessageSend} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
