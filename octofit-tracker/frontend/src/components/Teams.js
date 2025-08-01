import React, { useEffect, useState } from 'react';


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://friendly-bassoon-g4w46vx7jj6j2rpj-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Erro ao buscar equipes:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="card-title text-primary mb-3">Equipes</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
