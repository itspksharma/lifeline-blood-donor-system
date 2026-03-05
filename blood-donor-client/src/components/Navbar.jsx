import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll after route change
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition
        ${
          scrolled
            ? "bg-white dark:bg-slate-900 shadow"
            : "bg-white/30 dark:bg-slate-900/30 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-red-600">
          LifeLine
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 font-medium text-slate-800 dark:text-slate-200">
          <Link to="/">Home</Link>

          <Link to="/statistics">Statistics</Link>

          <button onClick={() => goToSection("why-join")}>
            Why Join
          </button>

          <button onClick={() => goToSection("guidelines")}>
            Guidelines
          </button>

          <button onClick={() => goToSection("blood-groups")}>
            Blood Groups
          </button>

          <Link to="/feedback">Feedback</Link>

          <Link to="/contact">Contact</Link>

          <button onClick={() => goToSection("about")}>
            About
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="flex flex-col p-6 gap-4 font-medium">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/statistics">Statistics</Link>

            <button onClick={() => goToSection("why-join")}>Why Join</button>
            <button onClick={() => goToSection("guidelines")}>Guidelines</button>
            <button onClick={() => goToSection("blood-groups")}>Blood Groups</button>

            <Link onClick={() => setOpen(false)} to="/feedback">Feedback</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

            <button onClick={() => goToSection("about")}>About</button>
          </div>
        </div>
      )}
    </nav>
  );
}
