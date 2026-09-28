import { useEffect, useRef, useState } from 'react'
import { exportProgress, parseImport } from '../storage.js'

// pending is null, or one of:
//   { kind: 'import', data }   waiting for the user to confirm an import
//   { kind: 'reset' }          waiting for the user to confirm a reset
//   { kind: 'error', message } the chosen file couldn't be imported
function Masthead({ storageOk, progress, validIds, onReplace }) {
  const [pending, setPending] = useState(null)
  const fileRef = useRef(null)
  const cancelRef = useRef(null)

  useEffect(() => {
    if (pending) cancelRef.current.focus()
  }, [pending])

  async function readFile(e) {
    const file = e.target.files[0]
    e.target.value = '' // lets the same file be picked again
    if (!file) return
    try {
      setPending({ kind: 'import', data: parseImport(await file.text(), validIds) })
    } catch (err) {
      setPending({ kind: 'error', message: err.message })
    }
  }

  function confirm() {
    onReplace(pending.kind === 'import' ? pending.data : null)
    setPending(null)
  }

  let message = null
  if (pending?.kind === 'import') {
    const done = Object.keys(pending.data.done).length
    const rev = Object.keys(pending.data.rev).length
    message = `Replace my current progress with ${done} done / ${rev} revisit from this file?`
  } else if (pending?.kind === 'reset') {
    message = "Clear all ticks and revisit marks? This can't be undone. Export your progress first if you might want it back."
  } else if (pending?.kind === 'error') {
    message = pending.message
  }

  return (
    <header className="masthead">
      <div className="mast-main">
        <div className="eyebrow">DSA Mastery Path 2.0 · Java</div>
        <h1>Problem Tracker</h1>
        <div className="save-state" id="saveState" data-mode={storageOk ? 'saved' : 'error'} role="status">
          <span className="dot"></span>
          <span id="saveText">{storageOk ? 'Saved in this browser' : "Progress can't be saved in this browser"}</span>
        </div>
      </div>
      <div className="mast-actions">
        <button type="button" className="ghost" onClick={() => exportProgress(progress)}>Export progress</button>
        <button type="button" className="ghost" onClick={() => fileRef.current.click()}>Import progress</button>
        <input ref={fileRef} type="file" accept=".json,application/json" hidden onChange={readFile} />
        <button type="button" className="ghost" onClick={() => setPending({ kind: 'reset' })}>Reset</button>
      </div>
      {pending && (
        <div
          className="confirm"
          data-kind={pending.kind}
          role={pending.kind === 'error' ? 'alert' : 'alertdialog'}
          aria-label={pending.kind === 'error' ? undefined : 'Confirm'}
          onKeyDown={(e) => { if (e.key === 'Escape') setPending(null) }}
        >
          <p>{message}</p>
          <div className="confirm-actions">
            {pending.kind !== 'error' && (
              <button type="button" className="ghost primary" onClick={confirm}>
                {pending.kind === 'import' ? 'Replace' : 'Clear'}
              </button>
            )}
            <button type="button" className="ghost" ref={cancelRef} onClick={() => setPending(null)}>
              {pending.kind === 'error' ? 'Dismiss' : 'Cancel'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Masthead
