import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { donationGuideData } from "../data/donationGuideData";

export default function DonationGuide() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="guidelines" className="bg-slate-100 dark:bg-slate-900 py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-14">
          Blood Donation Guidelines
        </h2>

        <AnimatePresence>
          {donationGuideData.map((card) => {
            const isOpen = activeId === card.id;

            if (activeId !== null && !isOpen) return null;

            return (
              <motion.div
                key={card.id}
                layout
                className="mb-6"
              >
                {/* CARD */}
                <motion.div
                  layout
                  onClick={() =>
                    setActiveId(isOpen ? null : card.id)
                  }
                  className="relative cursor-pointer bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg overflow-hidden"
                >
                  {/* 🔥 TOP BORDER LOOP ANIMATION */}
                  <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden">
                    <motion.div
                      className="h-full w-1/3"
                      animate={{ x: ["-100%", "300%"] }}
                      transition={{
                        duration: 2.5,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(239,68,68,0.8), transparent)",
                      }}
                    />
                  </div>

                  {/* HEADER */}
                  <div className="relative z-10 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-red-600">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-300 text-sm">
                        {card.short}
                      </p>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-slate-400"
                    >
                      ⌄
                    </motion.span>
                  </div>

                  {/* DETAILS */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="relative z-10 mt-6 overflow-hidden"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {card.details.map((d, i) => (
                            <div
                              key={i}
                              className="border rounded-lg p-4"
                            >
                              <p className="text-sm text-slate-500">
                                {d.label}
                              </p>
                              <p className="font-medium text-slate-800 dark:text-white">
                                {d.value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}
