'use client';

import { motion } from 'framer-motion';

export default function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 30 },
      }}
    >
      {children}
    </motion.div>
  );
}
