import ProblemRow from './ProblemRow.jsx'

function matches(it, progress, filter, query) {
  const done = !!progress.done[it.id]
  let ok = filter === 'all' || (filter === 'star' && it.s) || (filter === 'todo' && !done) ||
    (filter === 'done' && done) || (filter === 'rev' && progress.rev[it.id])
  if (ok && query) ok = it.n.toLowerCase().includes(query) || it.id.startsWith(query)
  return !!ok
}

function PhaseSection({ phase, stat, open, onOpenChange, progress, filter, query, onToggle }) {
  const visible = phase.items.map((it) => matches(it, progress, filter, query))
  const shown = visible.filter(Boolean).length
  const filtering = filter !== 'all' || query
  const complete = stat.done === stat.total && stat.total > 0

  return (
    <details
      className={complete ? 'phase done' : 'phase'}
      id={'phase-' + phase.p}
      data-p={phase.p}
      open={open}
      hidden={filtering && shown === 0}
      onToggle={(e) => onOpenChange(e.currentTarget.open)}
    >
      <summary>
        <span className="pnum">{phase.p}</span>
        <span><div className="ptitle">{phase.t}</div><div className="pweek">{phase.w}</div></span>
        <span className="pprog">
          <span className="count" data-count="">{stat.done}/{stat.total}</span>
          <span className="bar"><span data-bar="" style={{ width: stat.pct + '%' }}></span></span>
        </span>
      </summary>
      <p className="learn"><b>Learn:</b> {phase.learn}</p>
      <ol className="items">
        {phase.items.map((it, i) => (
          <ProblemRow
            key={it.id}
            item={it}
            done={!!progress.done[it.id]}
            rev={!!progress.rev[it.id]}
            hidden={!visible[i]}
            onToggle={onToggle}
          />
        ))}
      </ol>
      <p className="empty" hidden={shown > 0}>No problems in this phase match the filter.</p>
    </details>
  )
}

export default PhaseSection
