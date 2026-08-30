import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data.js';

const facts = [
  { k: '2+', v: 'Years teaching' },
  { k: '2', v: 'Full-stack projects' },
  { k: '3+', v: 'Databases used' },
  { k: '1', v: 'MERN certification' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader kicker="About Me" title="A bit about my journey" />
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 leading-relaxed text-slate-300"
        >
          <p>{profile.about}</p>
          <p className="mt-4 text-slate-400">
            I love building functional, end-to-end web applications with Python, Flask, and
            MongoDB — from real-time dashboards to role-based platforms. My time in the
            classroom taught me how to break down complex ideas and stay patient, organized,
            and reliable under pressure — skills I bring straight into every product I build.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {facts.map((f) => (
            <div key={f.v} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-display font-bold gradient-text">{f.k}</div>
              <div className="mt-1 text-sm text-slate-400">{f.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
