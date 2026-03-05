import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { whyDonateData } from "../data/whyDonateData";

export default function WhyDonate() {
  const [active, setActive] = useState(whyDonateData[0]);
  const [x, setX] = useState(0);

  const CARD_WIDTH = 360 + 24; // card width + gap
  const LOOP_LIMIT = -(CARD_WIDTH * whyDonateData.length);

  // 🔁 AUTO LOOP
  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => (prev <= LOOP_LIMIT ? 0 : prev - 0.5));
    }, 16); // ~60fps smooth scroll

    return () => clearInterval(interval);
  }, [LOOP_LIMIT]);

  // ⬅️➡️ MANUAL CONTROLS
  const slideLeft = () => {
    setX((prev) => prev + CARD_WIDTH);
  };

  const slideRight = () => {
    setX((prev) => prev - CARD_WIDTH);
  };

  return (
    <section id="why-join" className="bg-white dark:bg-slate-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-14">
          Why Donate Blood?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="md:col-span-1">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                {active.title}
              </h3>

              <div className="space-y-4">
                {active.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-slate-700 dark:text-slate-200"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="md:col-span-2 relative flex justify-end items-center">
            <div className="relative overflow-hidden max-w-[640px] w-full">

              {/* LEFT ARROW */}
              <button
                onClick={slideLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 
                           bg-white dark:bg-slate-800 w-10 h-10 rounded-full shadow
                           flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                ‹
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={slideRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 
                           bg-white dark:bg-slate-800 w-10 h-10 rounded-full shadow
                           flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                ›
              </button>

              {/* SLIDER TRACK */}
              <motion.div
                className="flex gap-6 w-max"
                animate={{ x }}
                transition={{ ease: "linear", duration: 0.2 }}
              >
                {[...whyDonateData, ...whyDonateData].map((item, index) => (
                  <div key={index} className="min-w-[360px]">
                    <div
                      onClick={() => setActive(item)}
                      className={`cursor-pointer rounded-2xl p-6 shadow transition
                        ${
                          active.id === item.id
                            ? "bg-red-600 text-white"
                            : "bg-slate-100 dark:bg-slate-800"
                        }`}
                    >
                      <h4 className="text-lg font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-sm opacity-80">
                        {item.short}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
