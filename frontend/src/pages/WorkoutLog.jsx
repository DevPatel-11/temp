import { useState, useEffect } from 'react';
import API from '../api';

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    const { data } = await API.get('/workouts');
    setWorkouts(data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div>
      {workouts.map(workout => (
        <div key={workout._id}>
          <h4>{workout.exercise}</h4>
          <p>{workout.duration} minutes</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutLog;
