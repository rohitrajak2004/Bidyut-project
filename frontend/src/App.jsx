import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import EditModal from './components/EditModal';
import * as api from './services/api';

function AppContent() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Edit modal state
  const [editingTask, setEditingTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.getAllTasks();
      if (response.success) {
        setTasks(response.data);
      }
    } catch (err) {
      setError('Failed to fetch tasks. Make sure the backend is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    const response = await api.createTask(taskData);
    if (response.success) {
      await fetchTasks();
    } else {
      throw new Error(response.error);
    }
  };

  const handleToggleTask = async (id) => {
    try {
      const response = await api.toggleTaskStatus(id);
      if (response.success) {
        await fetchTasks();
      }
    } catch (err) {
      setError('Failed to update task status.');
      console.error('Error toggling task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await api.deleteTask(id);
      if (response.success) {
        await fetchTasks();
      }
    } catch (err) {
      setError('Failed to delete task.');
      console.error('Error deleting task:', err);
    }
  };

  // Open edit modal
  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };

  // Close edit modal
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingTask(null);
  };

  // Save edited task
  const handleSaveTask = async (id, updates) => {
    const response = await api.updateTask(id, updates);
    if (response.success) {
      await fetchTasks();
    } else {
      throw new Error(response.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-500
                    bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100
                    dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 dark:bg-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 w-full max-w-2xl mx-auto px-4 pb-8">
          {/* Error banner */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 rounded-xl bg-red-500/10 backdrop-blur-xl
                          border border-red-500/20 text-red-600 dark:text-red-400
                          flex items-center justify-between"
              >
                <span>{error}</span>
                <button
                  onClick={() => setError('')}
                  className="p-1 hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress Bar */}
          {!loading && tasks.length > 0 && <ProgressBar tasks={tasks} />}

          {/* Task Form */}
          <TaskForm onAddTask={handleAddTask} />

          {/* Loading state */}
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-12 h-12 border-4 border-purple-200 dark:border-purple-800
                          border-t-purple-500 rounded-full"
              />
              <p className="mt-4 text-gray-500 dark:text-gray-400">Loading your tasks...</p>
            </motion.div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          )}
        </main>

        <Footer />
      </div>

      {/* Edit Modal */}
      {editingTask && (
        <EditModal
          task={editingTask}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
