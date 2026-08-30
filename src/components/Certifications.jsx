import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import SectionHeader from './SectionHeader.jsx';
import { certifications } from '../data.js';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeader kicker="Certifications" title="Continued Learning" />
      <div className="space-y-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-3xl p-7 grid md:grid-cols-[auto_1fr] gap-6 items-start"
          >
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 border border-white/10 text-xl text-cyan-300 shrink-0">
              <FaCertificate />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl">{cert.title}</h3>
              <p className="text-indigo-300 mt-1">{cert.org}</p>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm list-disc list-inside marker:text-cyan-400">
                {cert.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
