import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import SectionHeader from './SectionHeader.jsx';
import { education } from '../data.js';

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeader kicker="Education" title="Academic Background" />
      <div className="space-y-4">
        {education.map((edu, i) => (
          <motion.div
            key={edu.school + edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-3xl p-6 flex flex-wrap items-center gap-6"
          >
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-fuchsia-500/30 to-indigo-500/30 border border-white/10 text-2xl text-fuchsia-300 shrink-0">
              {edu.icon === 'college' ? <FaGraduationCap /> : <FaSchool />}
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="font-display font-semibold text-lg">{edu.school}</h3>
              <p className="text-slate-300 mt-0.5">{edu.degree}</p>
              <p className="text-sm text-slate-400 mt-0.5">{edu.period}</p>
            </div>
            <div className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-center shrink-0">
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {edu.grade === 'In Progress' ? 'Status' : 'Score'}
              </div>
              <div className="text-xl font-display font-bold gradient-text">{edu.grade}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
