export default function About() {
  return (
    <section id="about" className="bg-slate-100 dark:bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
          About LifeLine Blood Donor System
        </h2>

        <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          LifeLine is a community-driven blood donor management platform designed
          to connect voluntary blood donors with patients in need. Our goal is to
          make blood availability transparent, fast, and accessible during
          emergencies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              To ensure no life is lost due to lack of blood by encouraging
              voluntary donation and awareness.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              To build a reliable, technology-driven blood donation network
              across cities and rural areas.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              Why LifeLine
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Fast search, verified donors, real-time statistics, and a
              user-friendly experience for everyone.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
