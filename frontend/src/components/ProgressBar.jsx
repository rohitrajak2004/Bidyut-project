import { motion } from 'framer-motion';

function ProgressBar({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-6 p-5 rounded-2xl
                 bg-white/80 dark:bg-white/5 backdrop-blur-xl
                 border border-white/50 dark:border-white/10
                 shadow-xl dark:shadow-purple-500/5"
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-gray-700 dark:text-gray-300 font-medium">
          Your Progress
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {completed} of {total} completed
          </span>
          <motion.span
            key={percentage}
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            {percentage}%
          </motion.span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-3 bg-gray-200 dark:bg-gray-700/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                     relative overflow-hidden"
        >
          {/* Shimmer effect on progress bar */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>

      {/* Celebration message */}
      {percentage === 100 && total > 0 && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-3 text-green-500 dark:text-green-400 font-medium"
        >
          🎉 All tasks completed! Great job!
        </motion.p>
      )}
    </motion.div>
  );
}

export default ProgressBar;
