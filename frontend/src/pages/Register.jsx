import { useState } from 'react';
import API from '../api';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', { email, password });
      history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
