import { useState } from 'react';
import API from '../api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await API.post('/auth/forgot-password', { email });
      alert('Password reset link sent to your email.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleForgotPassword}>Submit</button>
    </div>
  );
};

export default ForgotPassword;
