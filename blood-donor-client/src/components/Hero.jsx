export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center bg-gradient-to-r from-red-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Your One Drop <br /> Can Save a Life
        </h1>

        <p className="text-lg md:text-xl mb-8 text-red-100">
          Join thousands of donors across cities and states
          who are making a real difference every day.
        </p>

        <a
          href="/login"
          className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-full hover:bg-red-100 transition"
        >
          Become a Donor ❤️
        </a>
      </div>
    </section>
  );
}
