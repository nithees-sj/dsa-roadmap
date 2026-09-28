import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import PHASES from './data/problems.json'
import { loadCollapsed, loadProgress, saveCollapsed, saveProgress } from './storage.js'
import Masthead from './components/Masthead.jsx'
import SummaryStats from './components/SummaryStats.jsx'
import PhaseMap from './components/PhaseMap.jsx'
import Toolbar from './components/Toolbar.jsx'
import PhaseSection from './components/PhaseSection.jsx'

const counted = (it) => !it.re // 15.12 is a re-solve, not a new problem

// Totals for the summary cards, plus done/total/% for every phase.
function computeStats(progress) {
  const stats = { all: 0, allDone: 0, star: 0, starDone: 0, rev: 0, week: 0, phases: {} }
  stats.lvl = { E: [0, 0], M: [0, 0], H: [0, 0] }
  const weekAgo = Date.now() - 7 * 864e5
  for (const p of PHASES) {
    let pt = 0, pd = 0
    for (const it of p.items) {
      const done = !!progress.done[it.id]
      if (progress.rev[it.id]) stats.rev++
      if (!counted(it)) continue
      pt++; stats.all++; stats.lvl[it.l][1]++
      if (it.s) stats.star++
      if (done) {
        pd++; stats.allDone++; stats.lvl[it.l][0]++
        if (it.s) stats.starDone++
        if ((progress.at[it.id] || 0) >= weekAgo) stats.week++
      }
    }
    stats.phases[p.p] = { done: pd, total: pt, pct: pt ? (pd / pt) * 100 : 0 }
  }
  return stats
}

function App() {
  const [initial] = useState(loadProgress)
  const [progress, setProgress] = useState(initial.progress)
  const [storageOk, setStorageOk] = useState(initial.ok)
  const [collapsed, setCollapsed] = useState(loadCollapsed)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => { saveCollapsed(collapsed) }, [collapsed])

  const query = search.trim().toLowerCase()
  const stats = computeStats(progress)

  function updateProgress(next) {
    setProgress(next)
    setStorageOk(saveProgress(next))
  }

  function toggle(id, field, value) {
    const next = { done: { ...progress.done }, rev: { ...progress.rev }, at: { ...progress.at } }
    if (value) next[field][id] = true
    else delete next[field][id]
    if (field === 'done') {
      if (value) next.at[id] = Date.now()
      else delete next.at[id]
    }
    updateProgress(next)
  }

  function setPhaseOpen(p, open) {
    setCollapsed((list) => {
      const rest = list.filter((x) => x !== p)
      if (open) return rest.length === list.length ? list : rest
      return rest.length === list.length ? [...list, p] : list
    })
  }

  function toggleAll() {
    const anyOpen = collapsed.length < PHASES.length
    setCollapsed(anyOpen ? PHASES.map((p) => p.p) : [])
  }

  function jumpTo(p) {
    flushSync(() => setPhaseOpen(p, true))
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('phase-' + p).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }

  const allCollapsed = collapsed.length === PHASES.length

  return (
    <div className="wrap">
      <Masthead storageOk={storageOk} />
      <SummaryStats stats={stats} />
      <PhaseMap phases={PHASES} stats={stats.phases} onJump={jumpTo} />
      <Toolbar
        filter={filter}
        onFilter={setFilter}
        search={search}
        onSearch={setSearch}
        allCollapsed={allCollapsed}
        onToggleAll={toggleAll}
      />
      <main id="phases">
        {PHASES.map((p) => (
          <PhaseSection
            key={p.p}
            phase={p}
            stat={stats.phases[p.p]}
            open={!collapsed.includes(p.p)}
            onOpenChange={(open) => setPhaseOpen(p.p, open)}
            progress={progress}
            filter={filter}
            query={query}
            onToggle={toggle}
          />
        ))}
      </main>
    </div>
  )
}

export default App
