import { profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#home" className="hover:text-white transition">Back to top ↑</a>
      </div>
    </footer>
  );
}
