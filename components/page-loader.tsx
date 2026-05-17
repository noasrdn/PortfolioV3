"use client"

import { motion } from "framer-motion"

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900 to-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        {/* Animated dots */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-rose"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="text-zinc-400 text-sm font-medium"
        >
          Loading...
        </motion.div>

        {/* Animated background glow */}
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-r from-brand-blue/20 to-brand-rose/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>
    </div>
  )
}
