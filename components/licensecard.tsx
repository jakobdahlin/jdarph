"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Check, X, Tally1, Tally2, Tally3 } from "lucide-react";
import StandardButton from "./standardbutton";
import ExtendedButton from "./extendedbutton";
import ExclusiveButton from "./exclusivebutton";

const licenseOptions = [
    {
      name: "Standard License",
      price: "$50 - $150",
      icon: <Tally1 className="w-8 h-8" />,
      features: ["Low-res images", "Websites", "Blogs", "Social Media"],
      notIncluded: ["High-res", "Full ownership rights"],
      button: <StandardButton />,
    },
    {
      name: "Extended License",
      price: "$200 - $500",
      icon: <Tally2 className="w-8 h-8" />,
      features: ["High-res images", "Magazines", "Brochures", "Large scale marketing"],
      notIncluded: ["Full ownership rights"],
      popular: true,
      button: <ExtendedButton />,
    },
    {
      name: "Exclusive License",
      price: "$1,000 - $5,000",
      icon: <Tally3 className="w-8 h-8" />,
      features: ["High-res images", "Full ownership rights"],
      notIncluded: [],
      button: <ExclusiveButton />,
    },
  ];
  

export default function LicenseOptionsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section ref={ref} id="license-options" className="py-20 relative overflow-hidden">
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
          <p className="text-lg md:text-lg text-neutral-500 max-w-3xl mx-auto">
            My photographs can be licensed under three different plans: a budget-friendly standard license, 
            an extended license for broader usage, and an exclusive rights purchase for complete control. 
            Explore the options to get the right level of access for your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {licenseOptions.map((option, index) => (
           <motion.div
           key={option.name}
           variants={{
             hidden: { opacity: 1, y: 20 },
             visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
           }}
           initial="hidden"
           animate={controls}
           className="opacity-100 transition-opacity duration-300 "
         >
           <div className="relative p-6 rounded-3xl 
             border border-neutral-800 text-white shadow-lg
             h-full flex flex-col 
             bg-gradient-to-t from-neutral-950/30 via-neutral-900/60 to-neutral-950/30
             backdrop-blur-lg border-white/10 hover:border-white/20
             group transition-transform duration-300">
             
             {/* Top Section */}
             <div className="text-center mb-4">
               <div className="inline-flex p-3 rounded-full border border-white/10 mb-4">
                 {option.icon}
               </div>
               <h3 className="text-xl font-bold mb-2">{option.name}</h3>
               <p className="text-2xl font-semibold">{option.price}</p>
             </div>
         
             {/* Features Section */}
             <div className="mb-4 flex-grow">
               {option.features.map((feature, i) => (
                 <p key={i} className="flex items-center text-sm text-white">
                   <Check className="h-5 w-5 text-white mr-2 shrink-0" /> {feature}
                 </p>
               ))}
               {option.notIncluded.length > 0 && (
                 <div className="mt-3">
                   {option.notIncluded.map((feature, i) => (
                     <p key={i} className="flex items-center text-sm text-neutral-600">
                       <X className="h-5 w-5 text-neutral-600 mr-2 shrink-0" /> {feature}
                     </p>
                   ))}
                 </div>
               )}
             </div>
         
             {/* Button at the Bottom */}
             <div className="mt-auto flex justify-center">{option.button}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}