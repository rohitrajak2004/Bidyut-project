import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    setLoading(true);

    try {
      await onAddTask({ title, description });
      setTitle('');
      setDescription('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setError('Failed to add task. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="mb-6 p-6 rounded-2xl
                 bg-white/80 dark:bg-white/5 backdrop-blur-xl
                 border border-white/50 dark:border-white/10
                 shadow-xl dark:shadow-purple-500/5"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        >
          ✨
        </motion.span>
        Add New Task
      </h2>

      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
          >
            ✓ Task added successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Title <span className="text-pink-500">*</span>
        </label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl
                     bg-white dark:bg-gray-800/50
                     border border-gray-200 dark:border-gray-700
                     text-gray-800 dark:text-white
                     placeholder-gray-400 dark:placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50
                     focus:border-purple-500
                     transition-all duration-300
                     disabled:opacity-50"
        />
      </div>

      {/* Description input */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Description
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add some details... (optional)"
          rows="3"
          disabled={loading}
          className="w-full px-4 py-3 rounded-xl
                     bg-white dark:bg-gray-800/50
                     border border-gray-200 dark:border-gray-700
                     text-gray-800 dark:text-white
                     placeholder-gray-400 dark:placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50
                     focus:border-purple-500
                     transition-all duration-300
                     resize-none
                     disabled:opacity-50"
        />
      </div>

      {/* Submit button */}
      <motion.button
        whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full py-3 px-6 rounded-xl font-semibold text-white
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                   hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600
                   shadow-lg shadow-purple-500/25
                   transition-all duration-300
                   disabled:opacity-50 disabled:cursor-not-allowed
                   relative overflow-hidden"
      >
        {/* Button shimmer effect */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
              Adding...
            </>
          ) : (
            <>
              <span>Add Task</span>
              <span>✦</span>
            </>
          )}
        </span>
      </motion.button>
    </motion.form>
  );
}

export default TaskForm;
