import React, { useEffect, useState } from 'react';


function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://friendly-bassoon-g4w46vx7jj6j2rpj-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Erro ao buscar leaderboard:', error));
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h2 className="card-title text-primary mb-3">Leaderboard</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(entry => (
            <tr key={entry._id}>
              <td>{entry.user?.username}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
