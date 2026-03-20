/**
 * Task Manager API - Main Server File
 *
 * This is the entry point of our backend application.
 * It sets up Express, middleware, and starts the server.
 */

const express = require("express"); // Web framework for Node.js
const cors = require("cors"); // Allows frontend to talk to backend
const taskRoutes = require("./routes/tasks"); // Import our routes

// Create Express application
const app = express();

// Set port from environment variable or default to 5000
// Render will provide PORT automatically during deployment
const PORT = process.env.PORT || 5000;

/**
 * MIDDLEWARE SETUP
 * Middleware are functions that run on every request
 */

// Enable CORS (Cross-Origin Resource Sharing)
// This allows our React frontend (different port/domain) to access this API
app.use(cors());

// Parse JSON bodies
// This allows us to read req.body when client sends JSON data
app.use(express.json());

/**
 * ROUTES SETUP
 */

// Health check route - useful for deployment platforms
// Example: GET http://localhost:5000/ returns "API is running"
app.get("/", (req, res) => {
  res.json({
    message: "Task Manager API is running!",
    version: "1.0.0",
    endpoints: {
      getAllTasks: "GET /tasks",
      createTask: "POST /tasks",
      updateTask: "PUT /tasks/:id",
      deleteTask: "DELETE /tasks/:id",
      toggleStatus: "PATCH /tasks/:id",
    },
  });
});

// Mount task routes at /tasks
// All routes in taskRoutes will be prefixed with /tasks
// Example: router.get('/') becomes GET /tasks
app.use("/tasks", taskRoutes);

/**
 * 404 Handler
 * This runs when no route matches the request
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
  });
});

/**
 * Start the server
 */
app.listen(PORT, () => {
  console.log(`
  ====================================
    Task Manager API Server
  ====================================
    Status: Running
    Port: ${PORT}
    URL: http://localhost:${PORT}
  ====================================
  `);
});
