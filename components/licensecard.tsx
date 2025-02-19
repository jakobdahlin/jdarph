"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Check, X, Tally1, Tally2, Tally3 } from "lucide-react"
import LicenseButton from "./licensebutton";


const licenseOptions = [
  {
    name: "Standard License",
    price: "$50 - $150",
    icon: <Tally1 className="w-8 h-8" />,
    features: [
      "Low-res images",
      "Websites",
      "Blogs",
      "Social Media",
    ],
    notIncluded: [
        "High-res",
        "Full ownership rights",
    ],
  },
  {
    name: "Extended License",
    price: "$200 - $500",
    icon: <Tally2 className="w-8 h-8" />,
    features: [
        "High-res images",
        "Magazines",
        "Brochures",
        "Large scale marketing",
    ],
    notIncluded: ["Full ownership rights"],
    popular: true,
  },
  {
    name: "Exclusive License",
    price: "$1,000 - $5,000",
    icon: <Tally3 className="w-8 h-8" />,
    features: [
        "High-res images",
        "Full ownership rights",
    ],
  },
]

export default function LicenseOptionsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} id="license-options" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-3xl font-bold mb-6">Simple and Transparent Licensing</h2>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
          My photographs can be licensed under three different plans: a budget-friendly standard license, 
          an extended license for broader usage, and an exclusive rights purchase for complete control. 
          Explore the options to get the right level of access for your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-wrap">
          {licenseOptions.map((option, index) => (
            <motion.div
            key={option.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
            }}
            initial="hidden"
            animate={controls}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="sm:block md:opacity-0 md:hover:opacity-100 transition-opacity duration-300"
          >
              <div
                className={`relative h-full ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                } transition-all duration-300`}
              >
                <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-neutral-700/20 to-neutral-950">
                  <div className="absolute inset-0 rounded-3xl border border-neutral-800 "></div>
                </div>

                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="relative p-6 rounded-lg h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 rounded-full bg-zinc-900 border border-white/10 mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                    <div className="text-3xl font-bold">{option.price}</div>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredCard === index ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <Check className="h-5 w-5 text-white mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </motion.li>
                      ))}
                      {option.notIncluded?.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-zinc-500"
                          initial={{ opacity: 0, x: -20 }}
                          animate={hoveredCard === index ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: (option.features.length + i) * 0.05 }}
                        >
                          <X className="h-5 w-5 text-zinc-500 mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <LicenseButton/>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

