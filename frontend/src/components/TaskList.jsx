import { motion, AnimatePresence } from 'framer-motion';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  // Show empty state if no tasks
  if (tasks.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-6 rounded-2xl
                   bg-white/60 dark:bg-white/5 backdrop-blur-xl
                   border border-white/50 dark:border-white/10"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-4"
        >
          📝
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          No tasks yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Add your first task above to get started!
        </p>
      </motion.div>
    );
  }

  // Sort tasks: pending first, then completed
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status === 'pending' && b.status === 'completed') return -1;
    if (a.status === 'completed' && b.status === 'pending') return 1;
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <span>Your Tasks</span>
          <motion.span
            key={tasks.length}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-7 h-7 rounded-full
                       bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold"
          >
            {tasks.length}
          </motion.span>
        </h2>
      </div>

      {/* Task list with animations */}
      <AnimatePresence mode="popLayout">
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default TaskList;
