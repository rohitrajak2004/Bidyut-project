import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-auto py-6 text-center"
    >
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        Built with{' '}
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block text-red-500"
        >
          ❤️ Love and Passion
        </motion.span>
      </p>
    </motion.footer>
  );
}

export default Footer;
