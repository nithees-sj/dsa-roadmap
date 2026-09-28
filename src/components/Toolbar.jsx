const FILTERS = [
  ['all', 'All'],
  ['star', '★ Must-do'],
  ['todo', 'To do'],
  ['done', 'Done'],
  ['rev', 'Revisit'],
]

function Toolbar({ filter, onFilter, search, onSearch, allCollapsed, onToggleAll }) {
  return (
    <div className="toolbar" role="toolbar" aria-label="Filter problems">
      <div className="seg" id="filters">
        {FILTERS.map(([f, label]) => (
          <button key={f} type="button" data-f={f} aria-pressed={filter === f} onClick={() => onFilter(f)}>{label}</button>
        ))}
      </div>
      <label className="search">
        <span hidden>Search problems</span>
        <input id="q" type="search" placeholder="Search by name or number" autoComplete="off" value={search} onChange={(e) => onSearch(e.target.value)} />
      </label>
      <button type="button" className="ghost" id="toggleAll" onClick={onToggleAll}>{allCollapsed ? 'Expand all' : 'Collapse all'}</button>
    </div>
  )
}

export default Toolbar
