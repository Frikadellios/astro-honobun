import { motion } from 'framer-motion'

export const MyComponent = () => (
  <motion.div initial={{ y: 'var(--spacing-8)' }} animate={{ y: 0 }} exit={{ y: 'var(--spacing-8)' }}>
    {children}
  </motion.div>
)
