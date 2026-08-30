import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { timeline } from '../data.js';

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <SectionHeader
        kicker="My Journey"
        title="Interactive Timeline"
        subtitle="Milestones that shaped who I am as an engineer today."
      />
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-cyan-500/40 to-transparent" />
        <div className="space-y-8">
          {timeline.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={t.title + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative grid grid-cols-2 gap-8 items-center"
              >
                <div className={left ? 'pr-8 text-right' : 'col-start-2 pl-8'}>
                  <div className="glass rounded-2xl p-5 inline-block text-left max-w-md">
                    <div className="font-mono text-xs text-cyan-400">{t.year}</div>
                    <h4 className="font-display font-semibold mt-1">{t.title}</h4>
                    <p className="text-sm text-slate-400 mt-1">{t.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 ring-4 ring-slate-950" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
