import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend integration later
    alert("Thank you for contacting us. We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-100 dark:bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-4">
          Contact Us
        </h2>

        <p className="text-center text-slate-600 dark:text-slate-300 mb-14">
          Have a question, suggestion, or need help? We’re here for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                Reach Us
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                LifeLine Blood Donor System is a community-driven platform
                dedicated to connecting blood donors with patients in need.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
              <p className="text-sm text-slate-500 mb-1">Email</p>
              <p className="font-medium text-slate-800 dark:text-white">
                support@lifeline.org
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
              <p className="text-sm text-slate-500 mb-1">Location</p>
              <p className="font-medium text-slate-800 dark:text-white">
                India (Nationwide Network)
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg p-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg p-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full rounded-lg p-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>

      </div>
    </section>
  );
}
