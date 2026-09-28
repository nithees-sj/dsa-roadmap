const LEVELS = { E: 'Easy', M: 'Medium', H: 'Hard' }

function ProblemRow({ item: it, done, rev, hidden, onToggle }) {
  return (
    <li className={done ? 'item is-done' : 'item'} data-id={it.id} hidden={hidden}>
      <input
        type="checkbox"
        id={'cb-' + it.id.replace('.', '-')}
        aria-label={`Mark ${it.id} ${it.n} as done`}
        checked={done}
        onChange={(e) => onToggle(it.id, 'done', e.target.checked)}
      />
      <span className="id">{it.id}</span>
      <span className="name">
        <a href={it.u} target="_blank" rel="noopener">{it.n}</a>
        <span className="src">{it.k}</span>
        {it.re ? <span className="note">re-solve of 2.14</span> : null}
      </span>
      <span className={'chip ' + it.l} title={LEVELS[it.l]}>{it.l}</span>
      <span className="star" aria-label={it.s ? 'Must-do' : ''}>{it.s ? '★' : ''}</span>
      <button
        type="button"
        className="rev"
        aria-pressed={rev}
        aria-label={`Mark ${it.id} to revisit`}
        onClick={() => onToggle(it.id, 'rev', !rev)}
      >Revisit</button>
    </li>
  )
}

export default ProblemRow
