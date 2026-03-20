# Task Manager App
## Full-Stack Web Application Presentation

---

# Slide 1: Title

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║                    ✨ TASK MANAGER ✨                        ║
║                                                              ║
║            A Modern Full-Stack Web Application               ║
║                                                              ║
║  ──────────────────────────────────────────────────────────  ║
║                                                              ║
║                    Presented By:                             ║
║                    ROHIT RAJAK                               ║
║                                                              ║
║  ──────────────────────────────────────────────────────────  ║
║                                                              ║
║           Live Demo: bidyut-project.vercel.app               ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 2: Problem Statement

```
╔══════════════════════════════════════════════════════════════╗
║                     PROBLEM STATEMENT                        ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Build a basic Task Manager where users can:                 ║
║                                                              ║
║    ┌─────────────────────────────────────────────────────┐   ║
║    │  ✅  Create tasks with title and description        │   ║
║    │  ✅  View all tasks in a list                       │   ║
║    │  ✅  Update existing tasks                          │   ║
║    │  ✅  Delete tasks                                   │   ║
║    │  ✅  Mark tasks as completed or pending             │   ║
║    └─────────────────────────────────────────────────────┘   ║
║                                                              ║
║  Requirements:                                               ║
║    • Backend: REST API with CRUD operations                  ║
║    • Frontend: React with interactive UI                     ║
║    • Fields: title, description, status, created_at          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 3: Solution Overview

```
╔══════════════════════════════════════════════════════════════╗
║                    SOLUTION OVERVIEW                         ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║   A complete Full-Stack application with:                    ║
║                                                              ║
║   ┌────────────────────┐      ┌────────────────────┐        ║
║   │     FRONTEND       │      │      BACKEND       │        ║
║   │                    │      │                    │        ║
║   │  • React 18        │ ───► │  • Node.js         │        ║
║   │  • Tailwind CSS    │      │  • Express.js      │        ║
║   │  • Framer Motion   │ ◄─── │  • REST API        │        ║
║   │  • Vite            │      │  • In-memory DB    │        ║
║   └────────────────────┘      └────────────────────┘        ║
║            │                           │                     ║
║            ▼                           ▼                     ║
║   ┌────────────────────┐      ┌────────────────────┐        ║
║   │      VERCEL        │      │       RENDER       │        ║
║   │   (Hosting)        │      │     (Hosting)      │        ║
║   └────────────────────┘      └────────────────────┘        ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 4: Tech Stack

```
╔══════════════════════════════════════════════════════════════╗
║                       TECH STACK                             ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                      FRONTEND                           │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  React 18        │  UI Library                          │ ║
║  │  Tailwind CSS    │  Styling Framework                   │ ║
║  │  Framer Motion   │  Animation Library                   │ ║
║  │  Vite            │  Build Tool                          │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                      BACKEND                            │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  Node.js         │  JavaScript Runtime                  │ ║
║  │  Express.js      │  Web Framework                       │ ║
║  │  CORS            │  Cross-Origin Support                │ ║
║  │  UUID            │  Unique ID Generation                │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 5: System Architecture

```
╔══════════════════════════════════════════════════════════════╗
║                   SYSTEM ARCHITECTURE                        ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║                      ┌──────────────┐                        ║
║                      │    USER      │                        ║
║                      │   (Browser)  │                        ║
║                      └──────┬───────┘                        ║
║                             │                                ║
║                             ▼                                ║
║  ┌──────────────────────────────────────────────────────┐   ║
║  │                 FRONTEND (React)                      │   ║
║  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │   ║
║  │  │  Header  │ │TaskForm  │ │TaskList  │ │  Footer  │ │   ║
║  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ │   ║
║  │                      │                                │   ║
║  │                ┌─────▼─────┐                         │   ║
║  │                │API Service│                         │   ║
║  │                └─────┬─────┘                         │   ║
║  └──────────────────────┼───────────────────────────────┘   ║
║                         │ HTTP (REST API)                    ║
║  ┌──────────────────────▼───────────────────────────────┐   ║
║  │                 BACKEND (Express)                     │   ║
║  │  ┌──────────┐ ┌──────────┐ ┌──────────┐              │   ║
║  │  │  Routes  │→│Controller│→│Data Store│              │   ║
║  │  └──────────┘ └──────────┘ └──────────┘              │   ║
║  └──────────────────────────────────────────────────────┘   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 6: API Endpoints

```
╔══════════════════════════════════════════════════════════════╗
║                      API ENDPOINTS                           ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Base URL: https://task-manager-backend-7a2y.onrender.com    ║
║                                                              ║
║  ┌─────────┬───────────────┬─────────────────────────────┐  ║
║  │ METHOD  │   ENDPOINT    │        DESCRIPTION          │  ║
║  ├─────────┼───────────────┼─────────────────────────────┤  ║
║  │  GET    │  /tasks       │  Get all tasks              │  ║
║  ├─────────┼───────────────┼─────────────────────────────┤  ║
║  │  POST   │  /tasks       │  Create a new task          │  ║
║  ├─────────┼───────────────┼─────────────────────────────┤  ║
║  │  PUT    │  /tasks/:id   │  Update task                │  ║
║  ├─────────┼───────────────┼─────────────────────────────┤  ║
║  │  DELETE │  /tasks/:id   │  Delete task                │  ║
║  ├─────────┼───────────────┼─────────────────────────────┤  ║
║  │  PATCH  │  /tasks/:id   │  Toggle task status         │  ║
║  └─────────┴───────────────┴─────────────────────────────┘  ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 7: Database Schema

```
╔══════════════════════════════════════════════════════════════╗
║                     DATABASE SCHEMA                          ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║                       TASK OBJECT                            ║
║                                                              ║
║  ┌───────────────────────────────────────────────────────┐  ║
║  │                                                       │  ║
║  │  {                                                    │  ║
║  │    "id": "550e8400-e29b-41d4-a716-446655440000",     │  ║
║  │    "title": "Complete project",                       │  ║
║  │    "description": "Finish the task manager app",      │  ║
║  │    "status": "pending",                               │  ║
║  │    "created_at": "2026-03-20T10:30:00.000Z"          │  ║
║  │  }                                                    │  ║
║  │                                                       │  ║
║  └───────────────────────────────────────────────────────┘  ║
║                                                              ║
║  ┌──────────────┬──────────┬───────────────────────────┐   ║
║  │    FIELD     │   TYPE   │       DESCRIPTION         │   ║
║  ├──────────────┼──────────┼───────────────────────────┤   ║
║  │ id           │ UUID     │ Unique identifier         │   ║
║  │ title        │ String   │ Task title (required)     │   ║
║  │ description  │ String   │ Task details (optional)   │   ║
║  │ status       │ Enum     │ "pending" / "completed"   │   ║
║  │ created_at   │ DateTime │ Creation timestamp        │   ║
║  └──────────────┴──────────┴───────────────────────────┘   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 8: Features

```
╔══════════════════════════════════════════════════════════════╗
║                        FEATURES                              ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                   CORE FEATURES                         │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  ✅  Create tasks with title and description            │ ║
║  │  ✅  View all tasks in a beautiful list                 │ ║
║  │  ✅  Update/Edit existing tasks                         │ ║
║  │  ✅  Delete tasks permanently                           │ ║
║  │  ✅  Toggle status (pending ↔ completed)                │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                   UI/UX FEATURES                        │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  🌙  Dark / Light mode toggle                           │ ║
║  │  📊  Progress tracker with animated bar                 │ ║
║  │  ⏰  Relative timestamps ("2 hours ago")                │ ║
║  │  ✨  Smooth animations (Framer Motion)                  │ ║
║  │  📱  Fully responsive design                            │ ║
║  │  🎨  Glassmorphism UI design                            │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 9: Project Structure

```
╔══════════════════════════════════════════════════════════════╗
║                    PROJECT STRUCTURE                         ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  task-manager/                                               ║
║  │                                                           ║
║  ├── backend/                                                ║
║  │   └── src/                                                ║
║  │       ├── controllers/                                    ║
║  │       │   └── taskController.js    ← Business Logic      ║
║  │       ├── routes/                                         ║
║  │       │   └── tasks.js             ← API Routes          ║
║  │       ├── data/                                           ║
║  │       │   └── tasks.js             ← Data Store          ║
║  │       └── server.js                ← Entry Point         ║
║  │                                                           ║
║  ├── frontend/                                               ║
║  │   └── src/                                                ║
║  │       ├── components/              ← React Components    ║
║  │       │   ├── Header.jsx                                  ║
║  │       │   ├── TaskForm.jsx                                ║
║  │       │   ├── TaskList.jsx                                ║
║  │       │   ├── TaskItem.jsx                                ║
║  │       │   ├── EditModal.jsx                               ║
║  │       │   └── ProgressBar.jsx                             ║
║  │       ├── context/                 ← Theme Context       ║
║  │       ├── services/                ← API Service         ║
║  │       └── App.jsx                  ← Root Component      ║
║  │                                                           ║
║  └── README.md                                               ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 10: Validation & Error Handling

```
╔══════════════════════════════════════════════════════════════╗
║               VALIDATION & ERROR HANDLING                    ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                 BACKEND VALIDATION                      │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │                                                         │ ║
║  │  // Title cannot be empty                               │ ║
║  │  if (!title || title.trim() === "") {                   │ ║
║  │    return res.status(400).json({                        │ ║
║  │      success: false,                                    │ ║
║  │      error: "Title is required"                         │ ║
║  │    });                                                  │ ║
║  │  }                                                      │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                  HTTP STATUS CODES                      │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  200  │  OK           │  Success                        │ ║
║  │  201  │  Created      │  Task created                   │ ║
║  │  400  │  Bad Request  │  Validation failed              │ ║
║  │  404  │  Not Found    │  Task doesn't exist             │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 11: UI Components

```
╔══════════════════════════════════════════════════════════════╗
║                      UI COMPONENTS                           ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌──────────────────────────────────────────────────────┐   ║
║  │  HEADER                                    [🌙/☀️]   │   ║
║  │  ✨ Task Manager                                     │   ║
║  │  Organize your day beautifully                       │   ║
║  ├──────────────────────────────────────────────────────┤   ║
║  │  PROGRESS BAR                                        │   ║
║  │  Your Progress: 2 of 4 completed            50%      │   ║
║  │  ████████████░░░░░░░░░░░░                           │   ║
║  ├──────────────────────────────────────────────────────┤   ║
║  │  TASK FORM                                           │   ║
║  │  ┌────────────────────────────────────────────────┐  │   ║
║  │  │ Title *                                        │  │   ║
║  │  └────────────────────────────────────────────────┘  │   ║
║  │  ┌────────────────────────────────────────────────┐  │   ║
║  │  │ Description                                    │  │   ║
║  │  └────────────────────────────────────────────────┘  │   ║
║  │         [ Add Task ✦ ]                               │   ║
║  ├──────────────────────────────────────────────────────┤   ║
║  │  TASK LIST                                           │   ║
║  │  ┌────────────────────────────────────────┐         │   ║
║  │  │ ○ Task Title              [✏️] [🗑️]   │         │   ║
║  │  │   Description                          │         │   ║
║  │  │   🕐 2 hours ago  📅 Today  ● Pending │         │   ║
║  │  └────────────────────────────────────────┘         │   ║
║  ├──────────────────────────────────────────────────────┤   ║
║  │  FOOTER                                              │   ║
║  │  Built with ❤️ using React, Tailwind, Framer Motion │   ║
║  └──────────────────────────────────────────────────────┘   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 12: Animations

```
╔══════════════════════════════════════════════════════════════╗
║                       ANIMATIONS                             ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  Powered by FRAMER MOTION                                    ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  ANIMATION         │  LOCATION        │  EFFECT         │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  Sparkles          │  Header          │  Rotate & Fade  │ ║
║  │  Theme Toggle      │  Header          │  Rotate 180°    │ ║
║  │  Progress Fill     │  Progress Bar    │  Width + Shimmer│ ║
║  │  Input Focus       │  Form            │  Scale 1.01x    │ ║
║  │  Button Shimmer    │  Add Task        │  Moving Gradient│ ║
║  │  Task Enter        │  Task List       │  Slide Up + Fade│ ║
║  │  Task Exit         │  Task List       │  Slide Left     │ ║
║  │  Checkbox Pop      │  Task Item       │  Scale Effect   │ ║
║  │  Background Blobs  │  App             │  Float Around   │ ║
║  │  Hover Lift        │  Task Cards      │  Y: -2px        │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  Example Code:                                               ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │  <motion.div                                            │ ║
║  │    initial={{ opacity: 0, y: 20 }}                      │ ║
║  │    animate={{ opacity: 1, y: 0 }}                       │ ║
║  │    exit={{ opacity: 0, x: -100 }}                       │ ║
║  │  />                                                     │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 13: Deployment

```
╔══════════════════════════════════════════════════════════════╗
║                       DEPLOYMENT                             ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║                    ┌─────────────┐                           ║
║                    │   GITHUB    │                           ║
║                    │ Repository  │                           ║
║                    └──────┬──────┘                           ║
║                           │                                  ║
║             ┌─────────────┴─────────────┐                   ║
║             │                           │                   ║
║             ▼                           ▼                   ║
║  ┌─────────────────────┐    ┌─────────────────────┐        ║
║  │      VERCEL         │    │       RENDER        │        ║
║  │   (Frontend)        │    │     (Backend)       │        ║
║  │                     │    │                     │        ║
║  │  • React App        │    │  • Express API      │        ║
║  │  • Auto Deploy      │    │  • Auto Deploy      │        ║
║  │  • SSL Certificate  │    │  • Free Tier        │        ║
║  └─────────────────────┘    └─────────────────────┘        ║
║             │                           │                   ║
║             ▼                           ▼                   ║
║  ┌─────────────────────────────────────────────────────┐   ║
║  │                    LIVE URLs                         │   ║
║  │                                                      │   ║
║  │  Frontend: https://bidyut-project.vercel.app        │   ║
║  │  Backend:  https://task-manager-backend-7a2y.onrender.com  ║
║  └─────────────────────────────────────────────────────┘   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 14: Demo Screenshots

```
╔══════════════════════════════════════════════════════════════╗
║                     DEMO SCREENSHOTS                         ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌────────────────────────┐  ┌────────────────────────┐     ║
║  │                        │  │                        │     ║
║  │      LIGHT MODE        │  │       DARK MODE        │     ║
║  │                        │  │                        │     ║
║  │  • Pink/Purple gradient│  │  • Deep purple/gray    │     ║
║  │  • White cards         │  │  • Dark cards          │     ║
║  │  • Glassmorphism       │  │  • Subtle glow         │     ║
║  │                        │  │                        │     ║
║  └────────────────────────┘  └────────────────────────┘     ║
║                                                              ║
║  ┌────────────────────────┐  ┌────────────────────────┐     ║
║  │                        │  │                        │     ║
║  │     MOBILE VIEW        │  │      EDIT MODAL        │     ║
║  │                        │  │                        │     ║
║  │  • Responsive layout   │  │  • Backdrop blur       │     ║
║  │  • Touch-friendly      │  │  • Slide animation     │     ║
║  │  • Optimized spacing   │  │  • Form validation     │     ║
║  │                        │  │                        │     ║
║  └────────────────────────┘  └────────────────────────┘     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 15: Future Enhancements

```
╔══════════════════════════════════════════════════════════════╗
║                   FUTURE ENHANCEMENTS                        ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                  PLANNED FEATURES                       │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  ☐  User authentication (Login/Register)               │ ║
║  │  ☐  Database integration (MongoDB/PostgreSQL)          │ ║
║  │  ☐  Task categories and tags                           │ ║
║  │  ☐  Due dates and reminders                            │ ║
║  │  ☐  Task priority levels (High/Medium/Low)             │ ║
║  │  ☐  Search and filter functionality                    │ ║
║  │  ☐  Drag and drop reordering                           │ ║
║  │  ☐  Data export (CSV/JSON)                             │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │               TECHNICAL IMPROVEMENTS                    │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  ☐  TypeScript migration                                │ ║
║  │  ☐  Unit tests (Jest/Vitest)                           │ ║
║  │  ☐  E2E tests (Cypress/Playwright)                     │ ║
║  │  ☐  CI/CD pipeline (GitHub Actions)                    │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 16: Summary

```
╔══════════════════════════════════════════════════════════════╗
║                        SUMMARY                               ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                  WHAT WE BUILT                          │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │                                                         │ ║
║  │  ✅  Full-Stack Task Manager Application                │ ║
║  │  ✅  RESTful API with all CRUD operations               │ ║
║  │  ✅  Modern React Frontend with Tailwind CSS            │ ║
║  │  ✅  Beautiful animations with Framer Motion            │ ║
║  │  ✅  Dark/Light mode support                            │ ║
║  │  ✅  Responsive design for all devices                  │ ║
║  │  ✅  Deployed and Live on the internet                  │ ║
║  │                                                         │ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
║  ┌─────────────────────────────────────────────────────────┐ ║
║  │                    LIVE LINKS                           │ ║
║  ├─────────────────────────────────────────────────────────┤ ║
║  │  🌐  Frontend:  bidyut-project.vercel.app              │ ║
║  │  🔗  Backend:   task-manager-backend-7a2y.onrender.com │ ║
║  │  📁  GitHub:    github.com/rohitrajak2004/Bidyut-project│ ║
║  └─────────────────────────────────────────────────────────┘ ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

# Slide 17: Thank You

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║                                                              ║
║                                                              ║
║                      THANK YOU! 🙏                           ║
║                                                              ║
║                                                              ║
║              ┌─────────────────────────────┐                ║
║              │                             │                ║
║              │       ROHIT RAJAK           │                ║
║              │                             │                ║
║              │  GitHub: @rohitrajak2004    │                ║
║              │                             │                ║
║              └─────────────────────────────┘                ║
║                                                              ║
║                                                              ║
║                   Questions? 🤔                              ║
║                                                              ║
║                                                              ║
║         Built with ❤️ Love and Passion                       ║
║                                                              ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Presentation Tips

1. **Slide 1-2**: Introduce yourself and the problem
2. **Slide 3-5**: Explain architecture and tech stack
3. **Slide 6-8**: Show API and database design
4. **Slide 9-12**: Demonstrate features and UI
5. **Slide 13-14**: Explain deployment and show demo
6. **Slide 15-16**: Discuss future plans and summarize
7. **Slide 17**: Thank the audience and take questions

**Duration**: Approximately 10-15 minutes

**Demo**: Open https://bidyut-project.vercel.app during presentation
