import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Achievements', 'achievements'],
  ['Journey', 'timeline'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-xl bg-slate-950/60 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 grid place-items-center font-display font-bold text-white shadow-glow">
            R
          </span>
          <span className="font-display font-semibold tracking-wide hidden sm:block">
            Riya<span className="gradient-text">.dev</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="w-10 h-10 grid place-items-center rounded-xl border border-white/10 hover:bg-white/5 transition"
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
          <a href="#contact" className="hidden sm:inline-flex btn-primary !py-2 !px-4 text-sm">
            Hire Me
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-xl border border-white/10"
            aria-label="Menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="lg:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-xl"
        >
          <ul className="px-5 py-4 grid gap-1">
            {links.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
