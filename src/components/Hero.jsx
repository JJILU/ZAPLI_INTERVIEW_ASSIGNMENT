
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const { scrollYProgress } = useScroll()

  // scroll enhancement (still used but NOT required for visibility)
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3])
  const fadeOut = useTransform(scrollYProgress, [0.5, 0.8], [1, 0])

  return (
    <section className="relative h-[200vh] bg-black overflow-hidden">

      {/* ===== BACKGROUND GLOW CORE (VISIBLE ON LOAD) ===== */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-500 rounded-full blur-3xl"
      />

      {/* ===== SECOND GLOW LAYER ===== */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 border border-purple-500 rounded-full opacity-30"
      />

      {/* ===== FLOATING ORBS ===== */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 5) * 15}%`,
          }}
        />
      ))}

      {/* ===== CENTER TEXT (VISIBLE IMMEDIATELY) ===== */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">

        <motion.div
          style={{
            scale: textScale,
            opacity: fadeOut,
          }}
          className="text-center z-20"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white"
          >
            AI Portal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-4 text-sm md:text-xl"
          >
            Experience intelligent search in motion
          </motion.p>

        </motion.div>

      </div>
    </section>
  )
}