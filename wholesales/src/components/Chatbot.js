import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for Icons
import { faPaperPlane, faComments } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import './ChatBot.css'; // Import custom CSS

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const chatBodyRef = useRef(null);
    const chatInputRef = useRef(null); // Reference for the input field

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const appendMessage = (message, sender) => {
        const newMessage = { message, sender, time: new Date().toLocaleTimeString() };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight; // Scroll to the bottom
    };

    const handleSendMessage = () => {
        const userMessage = chatInputRef.current.value.trim();
        if (userMessage === '') {
            alert("Please type a message");
            return;
        }

        // Add user message to chat
        appendMessage(userMessage, 'user');
        chatInputRef.current.value = '';

        // Simulated bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            appendMessage(botResponse, 'bot');
        }, 1000); // Simulate 1 second delay for bot response
    };

    const getBotResponse = (userMessage) => {
        if (userMessage.toLowerCase().includes('order')) {
            return 'Sure! Please provide your order ID for status updates.';
        } else if (userMessage.toLowerCase().includes('product')) {
            return 'I recommend checking out our latest products on the home page!';
        } else {
            return 'Sorry, I didn’t quite understand that. Can you rephrase your query?';
        }
    };

    return (
        <div>
            {/* Chat Window */}
            <div className={`chat-window ${isOpen ? '' : 'd-none'}`} id="chat-window">
                <div className="chat-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">AI Chat Bot</h5>
                    <button className="btn btn-sm btn-danger" onClick={toggleChat}>Close</button>
                </div>
                <div className="chat-body d-flex flex-column p-3" ref={chatBodyRef}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
                            <p>{msg.message}</p>
                            <div className="message-time">{msg.time}</div>
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <div className="input-group">
                        <input type="text" ref={chatInputRef} className="form-control" placeholder="Type your message..." />
                        <button className="btn btn-primary" onClick={handleSendMessage}>
                            Send <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Chat Open Button */}
            <button className="btn btn-primary" style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={toggleChat}>
                Chat with us <FontAwesomeIcon icon={faComments} />
            </button>
        </div>
    );
};

export default ChatBot;
