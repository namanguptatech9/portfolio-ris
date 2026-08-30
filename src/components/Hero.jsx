import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { profile, roles } from '../data.js';

function useTyping(words, speed = 80, pause = 1400) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (!del && text === word) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === '') {
      setDel(false);
      setI((p) => p + 1);
    } else {
      t = setTimeout(() => {
        setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }, del ? speed / 2 : speed);
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(roles);
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24">
      <div className="absolute inset-0 bg-hero-grad pointer-events-none" />
      <div className="section !py-0 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="chip mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Full-Stack Developer Roles · 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]"
          >
            Hi, I'm <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl text-slate-300 font-mono"
          >
            <span className="caret">{typed}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn-ghost">
              <FiMail /> Contact Me
            </a>
            <a href={resumeHref} className="btn-ghost" download>
              <FiDownload /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-3 text-slate-400"
          >
            {[
              [SiGithub, profile.socials.github, 'GitHub'],
              [FaLinkedin, profile.socials.linkedin, 'LinkedIn'],
            ].map(([Icon, href, label]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 grid place-items-center rounded-xl border border-white/10 hover:border-cyan-400/60 hover:text-white hover:bg-white/5 transition"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 blur-2xl opacity-40 animate-float" />
            <div className="relative w-full h-full rounded-full border border-white/10 glass grid place-items-center overflow-hidden">
              <div className="text-7xl sm:text-8xl font-display font-bold gradient-text">RD</div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-white/10"
            />
            <div className="absolute -bottom-2 -right-2 glass px-3 py-2 rounded-xl text-xs font-mono">
              <span className="text-emerald-400">●</span> 2+ yrs teaching
            </div>
            <div className="absolute -top-2 -left-2 glass px-3 py-2 rounded-xl text-xs font-mono">
              ⚡ Open to work
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
