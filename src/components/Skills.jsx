import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { skills } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        kicker="Tech Stack"
        title="Skills & Tools"
        subtitle="A toolbox sharpened across systems programming, problem-solving, and product UI."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 group relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 blur-3xl opacity-60 group-hover:opacity-100 transition" />
            <div className="relative flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-white/5 border border-white/10 text-cyan-400">
                <cat.icon />
              </div>
              <h3 className="font-display font-semibold text-lg">{cat.title}</h3>
            </div>
            <ul className="relative flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  className="chip !text-sm"
                >
                  {item.icon && <item.icon style={{ color: item.color }} />}
                  <span>{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
