import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { dsaRoadmap } from '../data/roadmap';
import { Target, CheckCircle2, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const [completedProblems, setCompletedProblems] = useState({});
  const totalProblems = dsaRoadmap.reduce((acc, phase) => acc + phase.problems.length, 0);

  useEffect(() => {
    // Load completion state from local storage
    const saved = localStorage.getItem('dsaProgress');
    if (saved) {
      setCompletedProblems(JSON.parse(saved));
    }
  }, []);

  const completedCount = Object.values(completedProblems).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / totalProblems) * 100) || 0;

  const getPhaseProgress = (phase) => {
    let count = 0;
    phase.problems.forEach(prob => {
      if (completedProblems[prob.id]) count++;
    });
    return { count, total: phase.problems.length };
  };

  return (
    <div className="dashboard">
      <div className="progress-overview card">
        <div className="progress-header">
          <h2>Overall Progress</h2>
          <span className="progress-text">{completedCount} / {totalProblems} ({progressPercentage}%)</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      <div className="phases-grid">
        {dsaRoadmap.map((phase) => {
          const { count, total } = getPhaseProgress(phase);
          const phaseProgress = Math.round((count / total) * 100) || 0;
          const isComplete = count === total;

          return (
            <Link to={`/phase/${phase.id}`} key={phase.id} className={`phase-card ${isComplete ? 'completed-phase' : ''}`}>
              <div className="phase-card-header">
                <h3>{phase.title}</h3>
                {isComplete ? <CheckCircle2 className="icon-success" /> : <BookOpen className="icon-primary" />}
              </div>
              <div className="phase-stats">
                <span className="stat-text">{count} / {total} Problems</span>
                <span className="stat-text">{phaseProgress}%</span>
              </div>
              <div className="mini-progress-bg">
                <div className="mini-progress-fill" style={{ width: `${phaseProgress}%` }}></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
