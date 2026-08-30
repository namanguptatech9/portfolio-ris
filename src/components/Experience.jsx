import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader kicker="Experience" title="Where I've Worked" />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-cyan-500/40 to-transparent" />
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                i % 2 === 0 ? '' : 'md:[direction:rtl]'
              }`}
            >
              <div className="md:[direction:ltr] pl-12 md:pl-0 md:pr-10">
                <div className="absolute left-2 md:left-1/2 -translate-x-1/2 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 ring-4 ring-slate-950" />
                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                    <span className="font-mono text-xs text-cyan-400">{exp.period}</span>
                  </div>
                  <p className="text-indigo-300 font-medium mb-3">{exp.company}</p>
                  <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside marker:text-cyan-400">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
