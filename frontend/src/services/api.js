/**
 * API Service
 *
 * This file handles all communication with the backend API.
 * We use the fetch API (not axios) as required.
 */

// API URL from environment variable, or default to localhost for development
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Get all tasks
 * @returns {Promise<Array>} Array of tasks
 */
export const getAllTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  const data = await response.json();
  return data;
};

/**
 * Create a new task
 * @param {Object} task - Task object with title and description
 * @returns {Promise<Object>} Created task
 */
export const createTask = async (task) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

/**
 * Update a task
 * @param {string} id - Task ID
 * @param {Object} updates - Object with title and/or description
 * @returns {Promise<Object>} Updated task
 */
export const updateTask = async (id, updates) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  const data = await response.json();
  return data;
};

/**
 * Delete a task
 * @param {string} id - Task ID
 * @returns {Promise<Object>} Deleted task info
 */
export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

/**
 * Toggle task status (pending <-> completed)
 * @param {string} id - Task ID
 * @returns {Promise<Object>} Updated task
 */
export const toggleTaskStatus = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
  });
  const data = await response.json();
  return data;
};
