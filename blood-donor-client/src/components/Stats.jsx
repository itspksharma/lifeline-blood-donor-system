import { bloodStats } from "../data/bloodStats";

export default function Stat() {
  const { totalDonors, gender, cities, bloodGroups, states } = bloodStats;

  return (
    <section id="statistics" className="bg-slate-100 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-14">
          Platform Statistics
        </h2>

        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <StatCard title="Total Donors" value={totalDonors} />
          <StatCard
            title="Male / Female"
            value={`${gender.male} / ${gender.female}`}
          />
          <StatCard
            title="Cities Covered"
            value={cities.count}
          />
        </div>

        {/* BLOOD GROUPS */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow mb-16">
          <h3 className="text-xl font-semibold text-red-600 mb-6">
            Blood Group Distribution
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(bloodGroups).map(([group, count]) => (
              <div
                key={group}
                className="border rounded-lg p-4 text-center"
              >
                <p className="text-lg font-bold text-slate-800 dark:text-white">
                  {group}
                </p>
                <p className="text-sm text-slate-500">
                  {count} donors
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* STATES */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold text-red-600 mb-6">
            State-wise Donor Count
          </h3>

          <div className="space-y-4">
            {Object.entries(states).map(([state, count]) => (
              <div key={state}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{state}</span>
                  <span>{count}</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded">
                  <div
                    className="bg-red-600 h-2 rounded"
                    style={{ width: `${(count / totalDonors) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* SMALL REUSABLE CARD */
function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow text-center">
      <p className="text-sm text-slate-500 mb-2">{title}</p>
      <p className="text-3xl font-bold text-red-600">{value}</p>
    </div>
  );
}
