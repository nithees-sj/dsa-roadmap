function PhaseMap({ phases, stats, onJump }) {
  return (
    <>
      <nav className="map" id="map" aria-label="Progress by phase">
        {phases.map((p) => {
          const s = stats[p.p]
          return (
            <a
              key={p.p}
              href={'#phase-' + p.p}
              data-p={p.p}
              className={s.pct >= 55 ? 'complete' : undefined}
              title={`Phase ${p.p}: ${p.t} (${s.done}/${s.total})`}
              onClick={(e) => { e.preventDefault(); onJump(p.p) }}
            >
              <span className="fill" style={{ height: s.pct + '%' }}></span>
              <span className="n">{p.p}</span>
            </a>
          )
        })}
      </nav>
      <div className="map-caption">Each block is one phase (0–23). Its fill shows how much of that phase you've finished. Select a block to jump to it.</div>
    </>
  )
}

export default PhaseMap
