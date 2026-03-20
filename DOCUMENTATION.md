# Task Manager - Complete Documentation

> A modern, full-stack task management application with beautiful UI and smooth animations.

**Live Demo:** https://bidyut-project.vercel.app
**API Endpoint:** https://task-manager-backend-7a2y.onrender.com

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Architecture](#2-architecture)
3. [Tech Stack](#3-tech-stack)
4. [Project Structure](#4-project-structure)
5. [Backend Documentation](#5-backend-documentation)
6. [Frontend Documentation](#6-frontend-documentation)
7. [API Reference](#7-api-reference)
8. [Database Schema](#8-database-schema)
9. [Features](#9-features)
10. [Installation Guide](#10-installation-guide)
11. [Environment Variables](#11-environment-variables)
12. [Deployment Guide](#12-deployment-guide)
13. [Screenshots](#13-screenshots)
14. [Troubleshooting](#14-troubleshooting)
15. [Future Enhancements](#15-future-enhancements)

---

## 1. Project Overview

### What is Task Manager?

Task Manager is a full-stack web application that allows users to create, manage, and track their daily tasks. It features a modern, responsive UI with dark/light mode support and smooth animations.

### Problem Statement

Build a basic task manager where users can:
- Create tasks with title and description
- Update existing tasks
- Delete tasks
- Mark tasks as completed or pending

### Solution

A complete CRUD (Create, Read, Update, Delete) application with:
- RESTful API backend using Node.js and Express
- Modern React frontend with Tailwind CSS
- Real-time status updates
- Beautiful animations using Framer Motion

---

## 2. Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT (Browser)                        │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    React Application                       │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │  │
│  │  │ Header  │  │TaskForm │  │TaskList │  │ Footer  │      │  │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘      │  │
│  │                      │                                     │  │
│  │               ┌──────▼──────┐                             │  │
│  │               │  API Service │                             │  │
│  │               │  (fetch)     │                             │  │
│  │               └──────┬──────┘                             │  │
│  └──────────────────────┼────────────────────────────────────┘  │
└─────────────────────────┼───────────────────────────────────────┘
                          │ HTTP Requests
                          │ (GET, POST, PUT, PATCH, DELETE)
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                     SERVER (Node.js/Express)                    │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                      Express App                           │  │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │  │
│  │  │ Middleware  │──│   Routes    │──│ Controllers │       │  │
│  │  │ (CORS,JSON) │  │ (/tasks)    │  │             │       │  │
│  │  └─────────────┘  └─────────────┘  └──────┬──────┘       │  │
│  │                                           │               │  │
│  │                                    ┌──────▼──────┐       │  │
│  │                                    │  Data Store │       │  │
│  │                                    │  (Array)    │       │  │
│  │                                    └─────────────┘       │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow

```
User Action → React Component → API Service → HTTP Request → Express Server
                                                                    │
User sees ← React Component ← State Update ← HTTP Response ←───────┘
```

---

## 3. Tech Stack

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18+ | JavaScript runtime |
| Express.js | 4.18.2 | Web framework |
| CORS | 2.8.5 | Cross-origin resource sharing |
| UUID | 9.0.0 | Unique ID generation |

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI library |
| Vite | 5.0.0 | Build tool & dev server |
| Tailwind CSS | 3.x | Utility-first CSS framework |
| Framer Motion | Latest | Animation library |

### Deployment

| Platform | Service |
|----------|---------|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| GitHub | Version control |

---

## 4. Project Structure

### Complete Directory Tree

```
task-manager/
│
├── backend/                          # Backend application
│   ├── src/
│   │   ├── controllers/
│   │   │   └── taskController.js     # Business logic
│   │   ├── data/
│   │   │   └── tasks.js              # In-memory data store
│   │   ├── routes/
│   │   │   └── tasks.js              # Route definitions
│   │   └── server.js                 # Application entry point
│   ├── .gitignore
│   └── package.json
│
├── frontend/                         # Frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── EditModal.jsx         # Edit task modal
│   │   │   ├── Footer.jsx            # Footer component
│   │   │   ├── Header.jsx            # Header with theme toggle
│   │   │   ├── ProgressBar.jsx       # Progress tracker
│   │   │   ├── TaskForm.jsx          # Add task form
│   │   │   ├── TaskItem.jsx          # Single task display
│   │   │   └── TaskList.jsx          # Task list container
│   │   ├── context/
│   │   │   └── ThemeContext.jsx      # Dark/Light mode context
│   │   ├── services/
│   │   │   └── api.js                # API communication
│   │   ├── App.jsx                   # Root component
│   │   ├── index.css                 # Global styles
│   │   └── main.jsx                  # React entry point
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── vite.config.js
│
├── DOCUMENTATION.md                  # This file
└── README.md                         # Project overview
```

---

## 5. Backend Documentation

### 5.1 Server Setup (server.js)

The main entry point that configures Express application.

```javascript
// Core imports
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());          // Enable CORS for frontend
app.use(express.json());  // Parse JSON request bodies

// Routes
app.use("/tasks", taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**Key Concepts:**
- `cors()`: Allows frontend (different origin) to make requests
- `express.json()`: Parses incoming JSON payloads
- `app.use("/tasks", taskRoutes)`: Mounts task routes at /tasks

### 5.2 Routes (routes/tasks.js)

Defines URL endpoints and maps them to controller functions.

```javascript
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} = require("../controllers/taskController");

router.get("/", getAllTasks);        // GET /tasks
router.post("/", createTask);        // POST /tasks
router.put("/:id", updateTask);      // PUT /tasks/:id
router.delete("/:id", deleteTask);   // DELETE /tasks/:id
router.patch("/:id", toggleTaskStatus); // PATCH /tasks/:id

module.exports = router;
```

**HTTP Methods Explained:**
| Method | Purpose | Example |
|--------|---------|---------|
| GET | Retrieve data | Get all tasks |
| POST | Create data | Add new task |
| PUT | Update entire resource | Update title & description |
| PATCH | Partial update | Toggle status only |
| DELETE | Remove data | Delete a task |

### 5.3 Controller (controllers/taskController.js)

Contains all business logic for CRUD operations.

#### Create Task
```javascript
const createTask = (req, res) => {
  const { title, description } = req.body;

  // Validation
  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Title is required and cannot be empty",
    });
  }

  // Create task object
  const newTask = {
    id: uuidv4(),
    title: title.trim(),
    description: description ? description.trim() : "",
    status: "pending",
    created_at: new Date().toISOString(),
  };

  // Save to array
  tasks.push(newTask);

  // Return response
  res.status(201).json({
    success: true,
    message: "Task created successfully",
    data: newTask,
  });
};
```

#### Get All Tasks
```javascript
const getAllTasks = (req, res) => {
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};
```

#### Update Task
```javascript
const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Task not found",
    });
  }

  // Update fields
  if (title !== undefined) tasks[taskIndex].title = title.trim();
  if (description !== undefined) tasks[taskIndex].description = description.trim();

  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    data: tasks[taskIndex],
  });
};
```

#### Delete Task
```javascript
const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Task not found",
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    data: deletedTask,
  });
};
```

#### Toggle Status
```javascript
const toggleTaskStatus = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Task not found",
    });
  }

  // Toggle between "pending" and "completed"
  tasks[taskIndex].status =
    tasks[taskIndex].status === "pending" ? "completed" : "pending";

  res.status(200).json({
    success: true,
    message: `Task marked as ${tasks[taskIndex].status}`,
    data: tasks[taskIndex],
  });
};
```

### 5.4 Data Store (data/tasks.js)

Simple in-memory storage using JavaScript array.

```javascript
let tasks = [];
module.exports = tasks;
```

**Note:** Data is lost when server restarts. For production, use a database.

---

## 6. Frontend Documentation

### 6.1 Application Entry (main.jsx)

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 6.2 Main App Component (App.jsx)

Root component that orchestrates all other components.

```javascript
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
```

**State Management:**
```javascript
const [tasks, setTasks] = useState([]);      // All tasks
const [loading, setLoading] = useState(true); // Loading state
const [error, setError] = useState('');       // Error messages
const [editingTask, setEditingTask] = useState(null); // Task being edited
const [isEditModalOpen, setIsEditModalOpen] = useState(false);
```

### 6.3 Components

#### Header.jsx
- Displays app title
- Theme toggle button (dark/light)
- Decorative sparkles animation

#### TaskForm.jsx
- Input fields for title and description
- Form validation
- Submit button with loading state
- Success/error messages

#### TaskList.jsx
- Renders list of TaskItem components
- Empty state when no tasks
- Sorts tasks (pending first)

#### TaskItem.jsx
- Displays single task
- Checkbox for status toggle
- Edit and Delete buttons
- Created_at timestamp with relative time
- Expandable date details

#### EditModal.jsx
- Modal overlay with backdrop blur
- Edit form for title and description
- Cancel and Save buttons
- Form validation

#### ProgressBar.jsx
- Shows completion percentage
- Animated progress bar
- Celebration message at 100%

#### Footer.jsx
- Credits and technologies used

### 6.4 Theme Context (ThemeContext.jsx)

Manages dark/light mode state across the application.

```javascript
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### 6.5 API Service (services/api.js)

Handles all HTTP communication with backend.

```javascript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Get all tasks
export const getAllTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

// Create task
export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return response.json();
};

// Update task
export const updateTask = async (id, updates) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  return response.json();
};

// Delete task
export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

// Toggle status
export const toggleTaskStatus = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
  });
  return response.json();
};
```

---

## 7. API Reference

### Base URL
```
Production: https://task-manager-backend-7a2y.onrender.com
Development: http://localhost:5000
```

### Endpoints

#### GET /tasks
Get all tasks.

**Request:**
```http
GET /tasks
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "status": "pending",
      "created_at": "2026-03-20T10:30:00.000Z"
    }
  ]
}
```

#### POST /tasks
Create a new task.

**Request:**
```http
POST /tasks
Content-Type: application/json

{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "pending",
    "created_at": "2026-03-20T10:30:00.000Z"
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Title is required and cannot be empty"
}
```

#### PUT /tasks/:id
Update a task.

**Request:**
```http
PUT /tasks/550e8400-e29b-41d4-a716-446655440000
Content-Type: application/json

{
  "title": "Updated title",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Updated title",
    "description": "Updated description",
    "status": "pending",
    "created_at": "2026-03-20T10:30:00.000Z"
  }
}
```

#### DELETE /tasks/:id
Delete a task.

**Request:**
```http
DELETE /tasks/550e8400-e29b-41d4-a716-446655440000
```

**Response:**
```json
{
  "success": true,
  "message": "Task deleted successfully",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "pending",
    "created_at": "2026-03-20T10:30:00.000Z"
  }
}
```

#### PATCH /tasks/:id
Toggle task status.

**Request:**
```http
PATCH /tasks/550e8400-e29b-41d4-a716-446655440000
```

**Response:**
```json
{
  "success": true,
  "message": "Task marked as completed",
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "status": "completed",
    "created_at": "2026-03-20T10:30:00.000Z"
  }
}
```

### HTTP Status Codes

| Code | Meaning | When Used |
|------|---------|-----------|
| 200 | OK | Successful GET, PUT, PATCH, DELETE |
| 201 | Created | Successful POST |
| 400 | Bad Request | Validation failed |
| 404 | Not Found | Task ID doesn't exist |
| 500 | Server Error | Internal server error |

---

## 8. Database Schema

### Task Object

```javascript
{
  id: String,          // UUID v4 - unique identifier
  title: String,       // Required - task title
  description: String, // Optional - task details
  status: String,      // "pending" or "completed"
  created_at: String   // ISO 8601 timestamp
}
```

### Field Specifications

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| id | UUID | Auto | Generated | Unique identifier |
| title | String | Yes | - | Task title (max 255 chars) |
| description | String | No | "" | Task description |
| status | Enum | Auto | "pending" | "pending" or "completed" |
| created_at | ISO Date | Auto | Current time | Creation timestamp |

---

## 9. Features

### Core Features

| Feature | Description |
|---------|-------------|
| Create Task | Add new tasks with title and description |
| View Tasks | See all tasks in a beautiful list |
| Update Task | Edit task title and description |
| Delete Task | Remove tasks permanently |
| Toggle Status | Mark tasks as completed/pending |

### UI/UX Features

| Feature | Description |
|---------|-------------|
| Dark/Light Mode | Toggle between themes |
| Progress Tracker | Visual completion percentage |
| Relative Timestamps | "2 hours ago", "Yesterday" |
| Expandable Dates | Click to see full date/time |
| Animations | Smooth transitions and effects |
| Responsive Design | Works on all screen sizes |

### Animation Details

| Animation | Location | Effect |
|-----------|----------|--------|
| Header sparkles | Header | Rotating, fading stars |
| Form input focus | TaskForm | Subtle scale effect |
| Button shimmer | Add Task button | Moving gradient |
| Task entry | TaskList | Slide up + fade in |
| Task exit | TaskList | Slide left + fade out |
| Checkbox check | TaskItem | Scale pop effect |
| Progress bar | ProgressBar | Fill with shimmer |
| Background blobs | App | Floating gradient circles |

---

## 10. Installation Guide

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Step 1: Clone Repository

```bash
git clone https://github.com/rohitrajak2004/Bidyut-project.git
cd Bidyut-project
```

### Step 2: Install Backend

```bash
cd backend
npm install
```

### Step 3: Install Frontend

```bash
cd ../frontend
npm install
```

### Step 4: Run Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Runs on http://localhost:5173
```

### Step 5: Open Application

Open browser and navigate to: `http://localhost:5173`

---

## 11. Environment Variables

### Backend

| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 5000 | Server port number |

### Frontend

| Variable | Default | Description |
|----------|---------|-------------|
| VITE_API_URL | http://localhost:5000 | Backend API URL |

### Setting Environment Variables

**Frontend (.env.production):**
```env
VITE_API_URL=https://task-manager-backend-7a2y.onrender.com
```

---

## 12. Deployment Guide

### Backend Deployment (Render)

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect GitHub repository
5. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Deploy

### Frontend Deployment (Vercel)

1. Go to [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Configure:
   - Framework: Vite
   - Root Directory: `frontend`
4. Add Environment Variable:
   - Name: `VITE_API_URL`
   - Value: Your Render backend URL
5. Deploy

---

## 13. Screenshots

### Light Mode
- Clean white/pink gradient background
- Glassmorphism card effects
- Purple accent colors

### Dark Mode
- Deep purple/gray gradient
- Subtle glow effects
- Reduced eye strain

### Mobile View
- Fully responsive layout
- Touch-friendly buttons
- Optimized spacing

---

## 14. Troubleshooting

### Common Issues

#### CORS Error
**Problem:** Frontend can't connect to backend.
**Solution:** Ensure CORS is enabled in backend:
```javascript
app.use(cors());
```

#### API URL Not Working
**Problem:** Tasks not loading.
**Solution:** Check VITE_API_URL environment variable is set correctly.

#### Render Server Sleeping
**Problem:** First request takes 30+ seconds.
**Solution:** This is normal for free tier. Server wakes up on first request.

#### Build Fails
**Problem:** Vercel/Render build fails.
**Solution:** Check Node.js version matches `engines` in package.json.

---

## 15. Future Enhancements

### Planned Features

- [ ] User authentication (Login/Register)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter
- [ ] Drag and drop reordering
- [ ] Data export (CSV/JSON)

### Technical Improvements

- [ ] TypeScript migration
- [ ] Unit tests (Jest)
- [ ] E2E tests (Cypress)
- [ ] CI/CD pipeline
- [ ] Error monitoring (Sentry)
- [ ] Analytics integration

---

## License

MIT License - See LICENSE file for details.

---

## Author

**Rohit Rajak**

- GitHub: [@rohitrajak2004](https://github.com/rohitrajak2004)

---

<div align="center">

Built with ❤️ Love and Passion

</div>
