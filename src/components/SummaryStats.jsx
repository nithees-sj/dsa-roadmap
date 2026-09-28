const pct = (n, d) => (d ? (n / d) * 100 : 0)

function SummaryStats({ stats }) {
  const { all, allDone, star, starDone, lvl, week, rev } = stats
  return (
    <section className="summary" aria-label="Progress summary">
      <div className="stat">
        <span className="label">All problems</span>
        <span className="big" id="allCount">{allDone} <small>/ {all}</small></span>
        <div className="bar"><span id="allBar" style={{ width: pct(allDone, all) + '%' }}></span></div>
        <div className="lvl-split" id="lvlSplit">
          <span className="e">Easy <b>{lvl.E[0]}</b>/{lvl.E[1]}</span>
          <span className="m">Medium <b>{lvl.M[0]}</b>/{lvl.M[1]}</span>
          <span className="h">Hard <b>{lvl.H[0]}</b>/{lvl.H[1]}</span>
        </div>
      </div>
      <div className="stat">
        <span className="label">★ Must-do</span>
        <span className="big" id="starCount">{starDone} <small>/ {star}</small></span>
        <div className="bar star"><span id="starBar" style={{ width: pct(starDone, star) + '%' }}></span></div>
        <span className="sub" id="starPct">{Math.round(pct(starDone, star))}% of the fast track</span>
      </div>
      <div className="stat">
        <span className="label">Last 7 days</span>
        <span className="big" id="weekCount">{week}</span>
        <span className="sub" id="revCount">{rev} marked to revisit</span>
      </div>
    </section>
  )
}

export default SummaryStats
