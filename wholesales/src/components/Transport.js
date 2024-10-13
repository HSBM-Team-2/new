import React, { useState } from 'react';
import './SupplierBuyerCommunication.css'; // Assume styles are moved to a CSS file

const Transport = () => {
  const [recipient, setRecipient] = useState('supplier1');
  const [message, setMessage] = useState('');
  const [messageHistory, setMessageHistory] = useState([]);

  const sendMessage = () => {
    if (message.trim() === '') {
      alert('Message cannot be empty');
      return;
    }

    const newMessage = `${recipient}: ${message}`;
    setMessageHistory([...messageHistory, newMessage]);
    setMessage(''); // Clear the input field
  };

  return (
    <div>
      <header>
        <h1>Supplier/Buyer Communication</h1>
      </header>
      <div className="container">
        <div className="card">
          <h3>Send Message</h3>
          <div className="form-group">
            <label htmlFor="recipient">Recipient</label>
            <select
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
            >
              <option value="supplier1">Supplier 1</option>
              <option value="supplier2">Supplier 2</option>
              <option value="buyer1">Buyer 1</option>
              <option value="buyer2">Buyer 2</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Attachment</label>
            <input type="file" id="attachment" />
          </div>
          <button onClick={sendMessage}>Send Message</button>

          <h4>Message History</h4>
          <div className="message-history" id="messageHistory">
            {messageHistory.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
