/**
 * In-Memory Task Storage
 *
 * This is our simple "database" - just an array!
 * When the server restarts, all data is lost.
 * For a real app, you'd use a database like MongoDB or PostgreSQL.
 */

// This array stores all our tasks
let tasks = [];

// Export the tasks array so other files can use it
module.exports = tasks;
