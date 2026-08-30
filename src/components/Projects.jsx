import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeader from './SectionHeader.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        kicker="Projects"
        title="Things I've Built"
        subtitle="A selection of products, dashboards, and experiments that showcase my craft."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl overflow-hidden"
          >
            <div className={`h-40 bg-gradient-to-br ${p.accent} relative`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-white/90 font-display text-2xl font-bold drop-shadow">
                  {p.title}
                </div>
              </div>
              <div className="absolute top-3 left-3 chip !bg-black/30 !text-white border-white/20">
                {p.subtitle}
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !py-2 !px-4 text-sm"
                >
                  <FiGithub /> Code
                </a>
                {p.demo && p.demo !== '#' && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary !py-2 !px-4 text-sm"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
