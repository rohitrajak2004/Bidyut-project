<div align="center">

# ✨ Task Manager

A modern, full-stack task management application with beautiful UI and smooth animations.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## 🚀 Features

- **Create, Read, Update, Delete** tasks
- **Toggle status** between pending and completed
- **Dark/Light mode** with smooth transitions
- **Progress tracker** with animated progress bar
- **Relative timestamps** ("2 hours ago", "Yesterday")
- **Beautiful animations** powered by Framer Motion
- **Responsive design** for all devices

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, Tailwind CSS, Framer Motion, Vite |
| **Backend** | Node.js, Express.js, UUID |
| **Storage** | In-memory (Array) |

---

## 📁 Project Structure

```
├── backend/
│   └── src/
│       ├── controllers/taskController.js
│       ├── routes/tasks.js
│       ├── data/tasks.js
│       └── server.js
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── Header.jsx
│       │   ├── TaskForm.jsx
│       │   ├── TaskList.jsx
│       │   ├── TaskItem.jsx
│       │   ├── EditModal.jsx
│       │   ├── ProgressBar.jsx
│       │   └── Footer.jsx
│       ├── context/ThemeContext.jsx
│       ├── services/api.js
│       └── App.jsx
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd task-manager

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
npm run dev
```

| Service | URL |
|---------|-----|
| Backend | http://localhost:5000 |
| Frontend | http://localhost:5173 |

---

## 📡 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/tasks` | Get all tasks |
| `POST` | `/tasks` | Create a task |
| `PUT` | `/tasks/:id` | Update a task |
| `DELETE` | `/tasks/:id` | Delete a task |
| `PATCH` | `/tasks/:id` | Toggle task status |

### Task Object

```json
{
  "id": "uuid",
  "title": "Task title",
  "description": "Task description",
  "status": "pending | completed",
  "created_at": "ISO timestamp"
}
```

---

## 📜 Scripts

### Backend
```bash
npm start     # Production
npm run dev   # Development (auto-reload)
```

### Frontend
```bash
npm run dev   # Development server
npm run build # Production build
```

---

## 🎨 Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
| Gradient pink/purple theme | Deep purple/gray theme |
| Glassmorphism cards | Subtle glow effects |

---

## 📄 License

MIT

---

<div align="center">

Built with ❤️ Love and Passion

</div>
