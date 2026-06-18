import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { dsaRoadmap, generateProblemUrl } from '../data/roadmap';
import { ArrowLeft, ExternalLink, Check, Circle } from 'lucide-react';

const PhaseDetail = () => {
  const { phaseId } = useParams();
  const phase = dsaRoadmap.find(p => p.id === phaseId);
  const [completedProblems, setCompletedProblems] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('dsaProgress');
    if (saved) {
      setCompletedProblems(JSON.parse(saved));
    }
  }, []);

  const toggleProblem = (problemId) => {
    const newCompleted = {
      ...completedProblems,
      [problemId]: !completedProblems[problemId]
    };
    setCompletedProblems(newCompleted);
    localStorage.setItem('dsaProgress', JSON.stringify(newCompleted));
  };

  if (!phase) {
    return <div className="error-message">Phase not found. <Link to="/">Go back</Link></div>;
  }

  const completedCount = phase.problems.filter(p => completedProblems[p.id]).length;
  const progressPercentage = Math.round((completedCount / phase.problems.length) * 100) || 0;

  return (
    <div className="phase-detail">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} /> Back to Dashboard
      </Link>
      
      <div className="phase-header card">
        <div className="header-info">
          <h2>{phase.title}</h2>
          <p>{completedCount} of {phase.problems.length} completed</p>
        </div>
        <div className="progress-circle-container">
          <div className="progress-circle" style={{ background: `conic-gradient(var(--primary-color) ${progressPercentage * 3.6}deg, var(--bg-color) 0deg)` }}>
            <span className="progress-circle-text">{progressPercentage}%</span>
          </div>
        </div>
      </div>

      <div className="problems-list card">
        <div className="table-header">
          <div className="col-checkbox">Status</div>
          <div className="col-id">#</div>
          <div className="col-title">Problem</div>
          <div className="col-pattern">Pattern</div>
          <div className="col-platform">Platform</div>
          <div className="col-link">Link</div>
        </div>
        
        {(() => {
          const standardProblems = phase.problems.filter(p => !p.isBooster);
          const boosterProblems = phase.problems.filter(p => p.isBooster);

          const renderProblem = (prob) => {
            const isCompleted = !!completedProblems[prob.id];
            return (
              <div key={prob.id} className={`problem-row ${isCompleted ? 'completed' : ''}`}>
                <div className="col-checkbox" onClick={() => toggleProblem(prob.id)}>
                  <button className={`checkbox-btn ${isCompleted ? 'checked' : ''}`} aria-label="Toggle Completion">
                    {isCompleted ? <Check size={18} /> : <Circle size={18} />}
                  </button>
                </div>
                <div className="col-id">{prob.id}</div>
                <div className="col-title">{prob.title}</div>
                <div className="col-pattern">
                  <span className="pattern-badge">{prob.pattern}</span>
                </div>
                <div className="col-platform">{prob.platform}</div>
                <div className="col-link">
                  <a href={generateProblemUrl(prob.title, prob.platform)} target="_blank" rel="noopener noreferrer" className="platform-link" title="Solve Problem">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            );
          };

          return (
            <>
              {standardProblems.map(renderProblem)}
              {boosterProblems.length > 0 && (
                <details className="booster-details">
                  <summary className="booster-summary">
                    Extra Booster Problems ({boosterProblems.length})
                  </summary>
                  <div className="booster-content">
                    {boosterProblems.map(renderProblem)}
                  </div>
                </details>
              )}
            </>
          );
        })()}
      </div>
    </div>
  );
};

export default PhaseDetail;
