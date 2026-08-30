import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import SectionHeader from './SectionHeader.jsx';
import { achievements, honors } from '../data.js';

function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);
  const isDecimal = !Number.isInteger(to);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const tick = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const raw = start + (to - start) * eased;
      setN(isDecimal ? Math.round(raw * 10) / 10 : Math.round(raw));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, isDecimal]);

  return (
    <span ref={ref}>
      {isDecimal ? n.toFixed(1) : n.toLocaleString()}
      {suffix}
    </span>
  );
}

const honorIcons = [FaTrophy, FaMedal, FaAward, FaCertificate];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionHeader
        kicker="Achievements"
        title="Numbers & Recognitions"
        subtitle="A snapshot of what I've earned through consistent practice and competition."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-display font-bold gradient-text">
              <Counter to={a.value} suffix={a.suffix} />
            </div>
            <div className="mt-2 text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
              {a.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {honors.map((h, i) => {
          const Icon = honorIcons[i % honorIcons.length];
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 text-amber-400 text-xl shrink-0">
                <Icon />
              </div>
              <div>
                <h4 className="font-display font-semibold">{h.title}</h4>
                <p className="text-sm text-slate-400 mt-1">{h.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
