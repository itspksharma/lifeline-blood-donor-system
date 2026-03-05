import { useState } from "react";
import { motion } from "framer-motion";

const bloodData = [
  {
    group: "O−",
    receive: ["O−"],
    donate: ["All Groups"],
    fact: "O− is the universal donor and is extremely valuable in emergencies.",
  },
  {
    group: "O+",
    receive: ["O−", "O+"],
    donate: ["O+", "A+", "B+", "AB+"],
    fact: "O+ is the most common blood group worldwide.",
  },
  {
    group: "A−",
    receive: ["O−", "A−"],
    donate: ["A−", "A+", "AB−", "AB+"],
    fact: "A− is rare and important for immune-sensitive patients.",
  },
  {
    group: "A+",
    receive: ["O−", "O+", "A−", "A+"],
    donate: ["A+", "AB+"],
    fact: "A+ donors are widely used for plasma and platelets.",
  },
  {
    group: "B−",
    receive: ["O−", "B−"],
    donate: ["B−", "B+", "AB−", "AB+"],
    fact: "B− is rare and crucial in multi-transfusion cases.",
  },
  {
    group: "B+",
    receive: ["O−", "O+", "B−", "B+"],
    donate: ["B+", "AB+"],
    fact: "B+ is one of the most common blood groups in India.",
  },
  {
    group: "AB−",
    receive: ["O−", "A−", "B−", "AB−"],
    donate: ["AB−", "AB+"],
    fact: "AB− is one of the rarest blood groups globally.",
  },
  {
    group: "AB+",
    receive: ["All Groups"],
    donate: ["AB+"],
    fact: "AB+ is the universal receiver.",
  },
];

export default function BloodCompatibility() {
  const [active, setActive] = useState("B+");
  const activeData = bloodData.find((b) => b.group === active);

  return (
    <section id="blood-groups" className="bg-slate-100 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-16">
          Blood Group Compatibility
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT PANEL */}
          <div className="md:col-span-1">
            <motion.div
              layout
              className="relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg h-full flex items-center"
            >
              {/* GLOW */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-red-400"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(239,68,68,0)",
                    "0 0 16px rgba(239,68,68,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              />

              {/* CONTENT */}
              <div className="relative z-10 flex gap-6 items-center w-full">

                {/* CENTERED BLOOD GROUP (ICON + NAME) */}
                <div className="flex flex-col items-center justify-center min-w-[90px]">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-lg">
                    🩸
                  </div>
                  <span className="mt-2 text-xl font-bold text-red-600">
                    {activeData.group}
                  </span>
                </div>

                {/* FLOW INFO */}
                <div className="flex-1 space-y-6">

                  {/* RECEIVE */}
                  <div>
                    <p className="text-sm text-slate-500 mb-1">
                      Can Receive From
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-red-500 text-lg"
                        animate={{ x: [16, 0, -16] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                      >
                        ←
                      </motion.span>
                      <span className="font-medium">
                        {activeData.receive.join(", ")}
                      </span>
                    </div>
                  </div>

                  {/* DONATE */}
                  <div>
                    <p className="text-sm text-slate-500 mb-1">
                      Can Donate To
                    </p>
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-red-500 text-lg"
                        animate={{ x: [-16, 0, 16] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                      >
                        →
                      </motion.span>
                      <span className="font-medium">
                        {activeData.donate.join(", ")}
                      </span>
                    </div>
                  </div>

                  {/* FACT */}
                  <div className="pt-3 border-t text-sm text-slate-600 dark:text-slate-300">
                    {activeData.fact}
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT PANEL */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {bloodData.map((b) => (
              <motion.div
                key={b.group}
                layout
                whileHover={{ scale: 1.05 }}
                onClick={() => setActive(b.group)}
                className={`cursor-pointer rounded-xl p-5 text-center shadow transition
                  ${
                    active === b.group
                      ? "bg-red-600 text-white"
                      : "bg-white dark:bg-slate-800"
                  }`}
              >
                <div className="text-xl font-bold">{b.group}</div>

                {active !== b.group && (
                  <motion.div
                    className="mt-2 text-xs text-red-500"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Click
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
