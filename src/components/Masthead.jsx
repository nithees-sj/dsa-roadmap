function Masthead({ storageOk }) {
  return (
    <header className="masthead">
      <div className="eyebrow">DSA Mastery Path 2.0 · Java</div>
      <h1>Problem Tracker</h1>
      <div className="save-state" id="saveState" data-mode={storageOk ? 'saved' : 'error'} role="status">
        <span className="dot"></span>
        <span id="saveText">{storageOk ? 'Saved in this browser' : "Progress can't be saved in this browser"}</span>
      </div>
    </header>
  )
}

export default Masthead
