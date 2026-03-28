# Study Session Planner (Context API + React Hook Form)

A production‑style study session planner built with React and Vite. It uses Context API for global state and React Hook Form for validation and submission. The UI is inspired by a modern dashboard aesthetic with dark surfaces, lavender accents, and subtle motion.

**Highlights**
- Add study sessions with validation (topic required, duration minimum 10 minutes).
- Display sessions in card/list layout.
- Delete sessions.
- Conditional priority styling (High/Medium/Low).
- Bonus feature: total study duration.
- Responsive navbar with mobile menu.
- 3D hover cards and soft animations.

**Tech Stack**
- React
- Vite
- Tailwind CSS
- React Hook Form
- Context API

**Run Locally**
1. Install dependencies:
   - `npm install`
2. Start dev server:
   - `npm run dev`

**Project Structure**
- `src/context/SessionContext.jsx`: global store for sessions.
- `src/components/SessionForm.jsx`: form UI + React Hook Form logic.
- `src/components/SessionList.jsx`: renders sessions and total duration.
- `src/components/SessionCard.jsx`: session card UI and delete action.
- `src/components/NavBar.jsx`: responsive top navigation.
- `src/components/Dashboard.jsx`: dashboard layout and stat cards.
- `src/App.jsx`: page wrapper and global background.
- `src/index.css`: global styles + 3D/animation utilities.

**Core Features Explained**
1. Add Study Session
   - Uses React Hook Form.
   - Fields: topic, subject, duration, priority, date.
   - Validates topic (required) and duration (min 10).
   - On submit: adds to list and resets form.
2. Display Sessions
   - Sessions show topic, subject, duration, priority, date.
   - Layout uses cards for clarity and scanability.
3. Delete Session
   - Each card includes a Delete button.
4. Priority Styling
   - High: red.
   - Medium: orange.
   - Low: green.
5. Bonus
   - Total study duration shown at top of list.

**Context API Design**
- `sessions`: array of session objects.
- `addSession(session)`: adds a new session to the list.
- `deleteSession(id)`: removes a session by id.
- Provider wraps the app in `src/main.jsx`.

**Session Object Shape**
- `id`: generated at add time.
- `topic`: string.
- `subject`: string (DSA / Web Dev / DBMS / OS / Other).
- `duration`: number (minutes).
- `priority`: string (Low / Medium / High).
- `date`: string (YYYY‑MM‑DD).

**UI & Motion Notes**
- Dark dashboard styling with soft lavender highlight.
- `card-3d` class provides a subtle 3D tilt on hover.
- `float-soft` and `fade-up` add gentle motion for depth.

**Customization**
- Colors can be adjusted in component classNames.
- Animation strength can be tuned in `src/index.css`.
- You can swap nav labels or add icons as needed.
