# DSA Mastery Path 2.0 · Problem Tracker

A small web app for working through **DSA Mastery Path 2.0 (Java)**: 24 phases (Phase 0 to Phase 23) and 377 problems, 195 of them marked ★ must-do.

Tick problems as you solve them, mark any you want to come back to, and see your progress:

- **Summary cards:** overall progress with the Easy / Medium / Hard split, ★ must-do progress, and how many you finished in the last 7 days.
- **Phase map:** one block per phase, filled by how much of that phase you've done. Select a block to jump to the phase.
- **Filters:** All / ★ Must-do / To do / Done / Revisit, plus search by problem name or number (for example `koko` or `4.1`).

## Study material

The written plan lives in [`docs/`](docs/):

- [Study plan](docs/DSA_Mastery_Path_2.0.md): the full phase-by-phase plan
- [Concepts guide](docs/DSA_Concepts_Guide.md): the concepts to read before each phase
- [Practice list](docs/DSA_Practice_List.md): topics and problems for each phase
- [Checklist](docs/DSA_Checklist.md): every problem as a Markdown tick-list

The problem data behind the tracker is in [`src/data/problems.json`](src/data/problems.json).

## Run it locally

Requires Node.js 20.19 or newer (the Docker build uses Node 22).

```sh
npm install
npm run dev        # dev server at http://localhost:5173
```

To check a production build:

```sh
npm run build      # outputs to dist/
npm run preview    # serves dist/ at http://localhost:4173
```

`npm run lint` runs ESLint.

## Deploy

- **Netlify:** `netlify.toml` builds with `npm run build` and publishes `dist/`. Pushing to the connected branch deploys automatically.
- **Docker:** `docker compose up --build` builds the app and serves it with nginx at <http://localhost:3000>.

## Where your progress is saved

Progress is stored **only in this browser** (`localStorage`, key `dsa-mastery-path-2:progress`). There are no accounts and nothing is sent to a server. It won't follow you to another browser or device, and clearing site data erases it.

To move progress or keep a backup:

1. Select **Export progress** to download `dsa-progress-YYYY-MM-DD.json`.
2. On the other browser, select **Import progress** and choose that file. You'll be asked to confirm before it replaces what's there.

**Reset** clears all ticks and revisit marks (after a confirmation). Export first if you might want them back.

Progress saved by the previous version of this app (key `dsaProgress`) is not read or changed.
