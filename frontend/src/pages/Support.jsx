import { useState, useEffect } from 'react';
import API from '../api';

const Support = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const fetchMessages = async () => {
    const { data } = await API.get('/support');
    setMessages(data);
  };

  const handleSendMessage = async () => {
    await API.post('/support', { message: newMessage });
    setNewMessage('');
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h3>Customer Support</h3>
      {messages.map(msg => (
        <div key={msg._id}>
          <p>{msg.message}</p>
        </div>
      ))}
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Send a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Support;
