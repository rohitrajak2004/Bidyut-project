/**
 * Task Routes
 *
 * This file defines all the API endpoints (URLs) for tasks.
 * Each route is connected to a controller function.
 *
 * HTTP Methods explained:
 * - GET: Retrieve data (read)
 * - POST: Create new data
 * - PUT: Update entire resource
 * - PATCH: Update partial resource
 * - DELETE: Remove resource
 */

const express = require("express");
const router = express.Router(); // Create a router object

// Import all controller functions
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} = require("../controllers/taskController");

/**
 * Route: GET /tasks
 * Purpose: Get all tasks
 * Example: GET http://localhost:5000/tasks
 */
router.get("/", getAllTasks);

/**
 * Route: POST /tasks
 * Purpose: Create a new task
 * Example: POST http://localhost:5000/tasks
 * Body: { "title": "Buy groceries", "description": "Milk, eggs, bread" }
 */
router.post("/", createTask);

/**
 * Route: PUT /tasks/:id
 * Purpose: Update a task's title and description
 * Example: PUT http://localhost:5000/tasks/550e8400-e29b-41d4-a716-446655440000
 * Body: { "title": "Updated title", "description": "Updated description" }
 */
router.put("/:id", updateTask);

/**
 * Route: DELETE /tasks/:id
 * Purpose: Delete a task
 * Example: DELETE http://localhost:5000/tasks/550e8400-e29b-41d4-a716-446655440000
 */
router.delete("/:id", deleteTask);

/**
 * Route: PATCH /tasks/:id
 * Purpose: Toggle task status (pending <-> completed)
 * Example: PATCH http://localhost:5000/tasks/550e8400-e29b-41d4-a716-446655440000
 */
router.patch("/:id", toggleTaskStatus);

// Export the router
module.exports = router;
