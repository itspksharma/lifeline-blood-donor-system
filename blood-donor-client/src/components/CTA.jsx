import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-red-600 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Be a Hero. Donate Blood Today.
        </h2>

        <p className="opacity-90 mb-8">
          Your single step can save multiple lives. Join our donor community now.
        </p>

        <Link
          to="/"
          className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition"
        >
          Join / Donate Now
        </Link>
      </div>
    </section>
  );
}
