import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative py-8 px-4 text-center"
    >
      {/* Sparkle decorations */}
      <motion.span
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-4 left-1/4 text-2xl"
      >
        ✦
      </motion.span>
      <motion.span
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 1, 0.3],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        className="absolute top-12 right-1/4 text-xl text-pink-400"
      >
        ✦
      </motion.span>
      <motion.span
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-4 left-1/3 text-lg text-purple-400"
      >
        ✦
      </motion.span>

      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-3 rounded-full
                   bg-white/10 dark:bg-white/5 backdrop-blur-lg
                   border border-white/20 dark:border-white/10
                   hover:bg-white/20 dark:hover:bg-white/10
                   transition-all duration-300 shadow-lg"
      >
        <motion.div
          initial={false}
          animate={{ rotate: darkMode ? 0 : 180 }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Title */}
      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-3"
      >
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Task Manager
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 dark:text-gray-400 text-lg"
      >
        Organize your day beautifully ✨
      </motion.p>
    </motion.header>
  );
}

export default Header;
