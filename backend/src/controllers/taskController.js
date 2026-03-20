/**
 * Task Controller
 *
 * This file contains all the logic for handling tasks.
 * Each function handles a specific operation (create, read, update, delete).
 */

const { v4: uuidv4 } = require("uuid"); // For generating unique IDs
const tasks = require("../data/tasks"); // Our in-memory "database"

/**
 * GET ALL TASKS
 * Returns all tasks from our array
 */
const getAllTasks = (req, res) => {
  // Simply return all tasks with 200 OK status
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};

/**
 * CREATE A NEW TASK
 * Adds a new task to our array
 */
const createTask = (req, res) => {
  // Get title and description from request body
  const { title, description } = req.body;

  // VALIDATION: Check if title exists and is not empty
  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Title is required and cannot be empty",
    });
  }

  // Create new task object
  const newTask = {
    id: uuidv4(), // Generate unique ID like "550e8400-e29b-41d4-a716-446655440000"
    title: title.trim(), // Remove extra spaces
    description: description ? description.trim() : "", // Optional field
    status: "pending", // Default status
    created_at: new Date().toISOString(), // Current timestamp
  };

  // Add task to our array (like inserting into database)
  tasks.push(newTask);

  // Return the created task with 201 Created status
  res.status(201).json({
    success: true,
    message: "Task created successfully",
    data: newTask,
  });
};

/**
 * UPDATE A TASK
 * Updates title and description of existing task
 */
const updateTask = (req, res) => {
  // Get task ID from URL parameter (e.g., /tasks/123 -> id = "123")
  const { id } = req.params;

  // Get new values from request body
  const { title, description } = req.body;

  // Find the task index in our array
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // If task not found, return 404 error
  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Task not found",
    });
  }

  // VALIDATION: If title is provided, it cannot be empty
  if (title !== undefined && title.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "Title cannot be empty",
    });
  }

  // Update the task (only update fields that are provided)
  if (title !== undefined) {
    tasks[taskIndex].title = title.trim();
  }
  if (description !== undefined) {
    tasks[taskIndex].description = description.trim();
  }

  // Return updated task
  res.status(200).json({
    success: true,
    message: "Task updated successfully",
    data: tasks[taskIndex],
  });
};

/**
 * DELETE A TASK
 * Removes a task from our array
 */
const deleteTask = (req, res) => {
  // Get task ID from URL parameter
  const { id } = req.params;

  // Find the task index
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // If task not found, return 404 error
  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Task not found",
    });
  }

  // Remove task from array using splice
  // splice(index, 1) removes 1 element at the given index
  const deletedTask = tasks.splice(taskIndex, 1)[0];

  // Return success message
  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    data: deletedTask,
  });
};

/**
 * TOGGLE TASK STATUS
 * Switches status between "pending" and "completed"
 */
const toggleTaskStatus = (req, res) => {
  // Get task ID from URL parameter
  const { id } = req.params;

  // Find the task index
  const taskIndex = tasks.findIndex((task) => task.id === id);

  // If task not found, return 404 error
  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Task not found",
    });
  }

  // Toggle the status using ternary operator
  // If currently "pending" -> change to "completed"
  // If currently "completed" -> change to "pending"
  tasks[taskIndex].status =
    tasks[taskIndex].status === "pending" ? "completed" : "pending";

  // Return updated task
  res.status(200).json({
    success: true,
    message: `Task marked as ${tasks[taskIndex].status}`,
    data: tasks[taskIndex],
  });
};

// Export all functions so routes can use them
module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
};
