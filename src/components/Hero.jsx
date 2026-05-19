import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const { scrollYProgress } = useScroll()

  // text grows
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 2])

  // text fades
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0])

  // portal grows
  const portalScale = useTransform(scrollYProgress, [0.4, 0.8], [0, 25])

  return (
    <section className="relative h-[300vh] bg-black overflow-hidden">
      
      {/* floating particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.2,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* center content */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        
        {/* title */}
        <motion.h1
          style={{ scale, opacity }}
          className="text-7xl font-bold text-center z-20"
        >
          Journey Into AI
        </motion.h1>

        {/* subtitle */}
        <motion.p
          style={{ opacity }}
          className="mt-6 text-gray-400 text-xl"
        >
          Scroll to explore the future
        </motion.p>

        {/* portal */}
        <motion.div
          style={{ scale: portalScale }}
          className="absolute w-20 h-20 rounded-full bg-cyan-500 blur-3xl"
        />
      </div>
    </section>
  )
}