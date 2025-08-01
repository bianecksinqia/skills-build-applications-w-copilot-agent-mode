

import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4 shadow">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Atividades</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Equipes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Usuários</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Treinos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="text-center">
                <div className="card shadow mx-auto" style={{maxWidth: '500px'}}>
                  <div className="card-body">
                    <h1 className="card-title display-5 mb-3 text-primary">Bem-vindo ao OctoFit Tracker</h1>
                    <p className="card-text">Acompanhe suas atividades, equipes, treinos e conquiste o topo do leaderboard!</p>
                    <Link to="/activities" className="btn btn-primary">Ver Atividades</Link>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">OctoFit Tracker</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Atividades</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Equipes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Usuários</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Treinos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<h1>Bem-vindo ao OctoFit Tracker</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
