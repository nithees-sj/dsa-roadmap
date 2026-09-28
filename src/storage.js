// Progress lives in this browser only. Every localStorage call is wrapped so the
// tracker still works (without saving) when storage is blocked or full.
const PROGRESS_KEY = 'dsa-mastery-path-2:progress'
const COLLAPSED_KEY = 'dsa-mastery-path-2:collapsed'

export const emptyProgress = () => ({ done: {}, rev: {}, at: {} })

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

// Returns { progress, ok }. ok is false when storage can't be read.
export function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    const saved = raw ? JSON.parse(raw) : {}
    const progress = emptyProgress()
    for (const key of ['done', 'rev', 'at']) {
      if (isPlainObject(saved?.[key])) progress[key] = saved[key]
    }
    return { progress, ok: true }
  } catch {
    return { progress: emptyProgress(), ok: false }
  }
}

// Returns true when the write succeeded.
export function saveProgress(progress) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
    return true
  } catch {
    return false
  }
}

export function loadCollapsed() {
  try {
    const list = JSON.parse(localStorage.getItem(COLLAPSED_KEY) || '[]')
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

export function saveCollapsed(list) {
  try {
    localStorage.setItem(COLLAPSED_KEY, JSON.stringify(list))
  } catch {
    // Collapsed phases are a convenience; nothing to do if this fails.
  }
}

// Downloads the progress object as dsa-progress-YYYY-MM-DD.json.
export function exportProgress(progress) {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  const name = `dsa-progress-${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}.json`
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}


// Checks an exported file and returns a clean progress object.
// Ids that aren't in problems.json are ignored. Throws an Error with a
// readable message when the file isn't a progress export.
export function parseImport(text, validIds) {
  let data
  try {
    data = JSON.parse(text)
  } catch {
    throw new Error("This file isn't valid JSON.")
  }
  if (!isPlainObject(data) || !isPlainObject(data.done) || !isPlainObject(data.rev) || !isPlainObject(data.at)) {
    throw new Error("This file doesn't look like a progress export. It needs done, rev and at sections.")
  }
  const progress = emptyProgress()
  for (const [id, v] of Object.entries(data.done)) {
    if (validIds.has(id) && v === true) progress.done[id] = true
  }
  for (const [id, v] of Object.entries(data.rev)) {
    if (validIds.has(id) && v === true) progress.rev[id] = true
  }
  for (const [id, v] of Object.entries(data.at)) {
    if (progress.done[id] && Number.isFinite(v)) progress.at[id] = v
  }
  return progress
}
