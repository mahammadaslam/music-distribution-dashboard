# Mini Music Distribution Dashboard

## Overview
A small Next.js app implementing a mock music distribution dashboard for a frontend assessment. It includes:

- Login (mock)
- Dashboard (list of tracks via API route)
- Track Upload (mock add)
- Track Details (dynamic route)
- API route `/api/tracks` serving mock data

## Setup
1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open http://localhost:3000

## Notes
- The API uses an in-memory store (persists while dev server runs).
- For evaluation, you can adapt `/pages/api/tracks.js` to persist to a file or DB.

## Features implemented
- All required pages and API route
- Responsive CSS
- Basic session via `localStorage` for mock login
- Simple search on dashboard (title/artist)
- Theme (light/dark) persisted in `localStorage`
