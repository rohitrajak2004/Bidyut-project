import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const isCompleted = task.status === 'completed';
  const [showFullDate, setShowFullDate] = useState(false);

  // Format date for badge (short version)
  const formatDateShort = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diff = Math.floor((today - date) / (1000 * 60 * 60 * 24));

    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Format date with full details
  const formatDateFull = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Format time
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  // Get relative time (e.g., "2 hours ago")
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return formatDateFull(dateString);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -100, scale: 0.8 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3 }}
      className={`p-5 rounded-2xl mb-4 relative overflow-hidden
                  bg-white/80 dark:bg-white/5 backdrop-blur-xl
                  border border-white/50 dark:border-white/10
                  shadow-lg dark:shadow-purple-500/5
                  transition-all duration-300
                  ${isCompleted ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-purple-500'}`}
    >
      {/* Checkbox and content */}
      <div className="flex items-start gap-4">
        {/* Custom Checkbox */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
                      transition-all duration-300 mt-1
                      ${isCompleted
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 border-green-400'
                        : 'border-gray-300 dark:border-gray-600 hover:border-purple-500'}`}
        >
          {isCompleted && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </motion.svg>
          )}
        </motion.button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className={`text-lg font-semibold transition-all duration-300
                             ${isCompleted
                               ? 'line-through text-gray-400 dark:text-gray-500'
                               : 'text-gray-800 dark:text-white'}`}>
                {task.title}
              </h3>
              {task.description && (
                <p className={`mt-1 text-sm transition-all duration-300
                              ${isCompleted
                                ? 'line-through text-gray-400 dark:text-gray-600'
                                : 'text-gray-600 dark:text-gray-400'}`}>
                  {task.description}
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-1">
              {/* Edit button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onEdit(task)}
                className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-blue-500
                           hover:bg-blue-50 dark:hover:bg-blue-500/10
                           transition-all duration-300"
                title="Edit task"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </motion.button>

              {/* Delete button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(task.id)}
                className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-red-500
                           hover:bg-red-50 dark:hover:bg-red-500/10
                           transition-all duration-300"
                title="Delete task"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Bottom row - Date and Status */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            {/* Created At Badge - Clickable to show full date */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFullDate(!showFullDate)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs
                         bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400
                         hover:bg-purple-200 dark:hover:bg-purple-500/30
                         transition-all duration-300 cursor-pointer"
              title="Click to see full date"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{getRelativeTime(task.created_at)}</span>
            </motion.button>

            {/* Date badge */}
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs
                           bg-gray-100 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDateShort(task.created_at)}
            </span>

            {/* Status badge */}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
                         ${isCompleted
                           ? 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400'
                           : 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400'}`}
            >
              {isCompleted ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Completed
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  Pending
                </>
              )}
            </motion.span>
          </div>

          {/* Expanded Created At Details */}
          <AnimatePresence>
            {showFullDate && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50
                           dark:from-purple-900/20 dark:to-pink-900/20
                           border border-purple-200 dark:border-purple-700/30"
              >
                <div className="flex items-center gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">📅</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Created:</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    {formatDateFull(task.created_at)}
                  </span>
                  <span className="text-purple-400 dark:text-purple-500">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {formatTime(task.created_at)}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative gradient line for pending tasks */}
      {!isCompleted && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 origin-left
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        />
      )}
    </motion.div>
  );
}

export default TaskItem;
