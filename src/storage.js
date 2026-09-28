// Progress lives in this browser only. Every localStorage call is wrapped so the
// tracker still works (without saving) when storage is blocked or full.
const PROGRESS_KEY = 'dsa-mastery-path-2:progress'
const COLLAPSED_KEY = 'dsa-mastery-path-2:collapsed'

export const emptyProgress = () => ({ done: {}, rev: {}, at: {} })

// Returns { progress, ok }. ok is false when storage can't be read.
export function loadProgress() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    const saved = raw ? JSON.parse(raw) : {}
    return { progress: { ...emptyProgress(), ...saved }, ok: true }
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
