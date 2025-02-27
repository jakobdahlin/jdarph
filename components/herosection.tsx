"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Camera, Ruler, Crown, Tv } from "lucide-react"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const stats = [
    { icon: <Camera className="w-8 h-8" />, label: "photos captured", value: "250,000+" },
    { icon: <Ruler className="w-8 h-8" />, label: "Sqft covered", value: "1,000,000+" },
    { icon: <Crown className="w-8 h-8" />, label: "Empire State Building photo contest", value: "Finalist" },
    { icon: <Tv className="w-8 h-8" />, label: "on Million Dollar Listing: New York", value: "Featured" },
  ]

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-32 pb-2"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h1 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-6 relative">
              <span className="text-responsive bg-clip-text text-white">
                Architectural Photography
              </span>
            </h1>
            <p className="text-lg md:text-lg mb-8 text-neutral-500 max-w-3xl mx-auto">
            Bringing New York's architecture to life through photography since 2015, capturing the city's evolving skyline, iconic landmarks, and hidden architectural gems with precision and artistry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-neutral-900/50 rounded-3xl h-44 p-6 backdrop-blur-lg border border-white/10 transition-colors hover:border-white/20"
                >
                  <div className="mb-6 text-white/70 flex justify-center">{stat.icon}</div>
                  <motion.div
                    className="text-2xl font-bold mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
