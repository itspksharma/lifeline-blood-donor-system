export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              LifeLine
            </h3>
            <p className="text-sm opacity-80">
              A community-driven blood donor platform connecting lives in
              emergencies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">
              Quick Links
            </h4>
            <ul className="space-y-1 text-sm">
              <li>Home</li>
              <li>Statistics</li>
              <li>Why Join</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">
              Contact
            </h4>
            <p className="text-sm">support@lifeline.org</p>
            <p className="text-sm">India (Nationwide)</p>
          </div>

        </div>

        <div className="border-t border-slate-700 pt-4 text-center text-sm opacity-70">
          © {new Date().getFullYear()} LifeLine Blood Donor System. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
