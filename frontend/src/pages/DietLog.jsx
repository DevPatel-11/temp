import { useState, useEffect } from 'react';
import API from '../api';

const DietLog = () => {
  const [diets, setDiets] = useState([]);

  const fetchDiets = async () => {
    const { data } = await API.get('/diets');
    setDiets(data);
  };

  useEffect(() => {
    fetchDiets();
  }, []);

  return (
    <div>
      {diets.map(diet => (
        <div key={diet._id}>
          <h4>{diet.dietPlan}</h4>
        </div>
      ))}
    </div>
  );
};

export default DietLog;
