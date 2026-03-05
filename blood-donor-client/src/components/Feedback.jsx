import { useState } from "react";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend will be connected later
    alert("Thank you for your feedback ❤️");
    setRating(0);
    setMessage("");
  };

  return (
    <section id="feedback" className="bg-white dark:bg-slate-900 py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
          Your Feedback Matters
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mb-12">
          Your experience helps us improve and save more lives together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 shadow text-left"
        >
          {/* Rating */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
              How was your experience?
            </label>

            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  type="button"
                  key={num}
                  onClick={() => setRating(num)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition
                    ${
                      rating >= num
                        ? "bg-red-600 text-white"
                        : "bg-white dark:bg-slate-700 text-slate-600"
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
              Share your thoughts
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
              placeholder="Your feedback helps us build a better platform..."
              className="w-full rounded-lg p-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
            >
              Submit Feedback
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}
