import React, { useEffect, useState } from 'react';


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://friendly-bassoon-g4w46vx7jj6j2rpj-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Erro ao buscar treinos:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="card-title text-primary mb-3">Treinos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout._id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
