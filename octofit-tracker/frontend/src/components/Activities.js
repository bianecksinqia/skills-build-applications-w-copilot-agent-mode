import React, { useEffect, useState } from 'react';


function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://friendly-bassoon-g4w46vx7jj6j2rpj-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Erro ao buscar atividades:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="card-title text-primary mb-3">Atividades</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
