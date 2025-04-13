import { useState, useEffect } from 'react';
import API from '../api';

const ProgressLog = () => {
  const [progress, setProgress] = useState([]);

  const fetchProgress = async () => {
    const { data } = await API.get('/progress');
    setProgress(data);
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <div>
      {progress.map(p => (
        <div key={p._id}>
          <h4>Weight: {p.weight} kg</h4>
          <p>Body Fat: {p.bodyFatPercentage}%</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressLog;
