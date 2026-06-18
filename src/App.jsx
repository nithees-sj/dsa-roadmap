import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import PhaseDetail from './pages/PhaseDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <h1>DSA Mastery Path</h1>
            <p>Track your journey through 154 essential problems</p>
          </div>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/phase/:phaseId" element={<PhaseDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
