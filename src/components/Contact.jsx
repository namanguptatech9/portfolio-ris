import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import SectionHeader from './SectionHeader.jsx';
import { profile } from '../data.js';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section">
      <SectionHeader
        kicker="Get In Touch"
        title="Let's build something great"
        subtitle="Open to full-time roles, internships, and exciting collaborations."
      />
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7 space-y-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
          >
            <FiMail className="text-cyan-400" /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:bg-white/5 transition"
          >
            <FiPhone className="text-cyan-400" /> {profile.phone}
          </a>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10">
            <FiMapPin className="text-cyan-400" /> {profile.location}
          </div>
          <div className="flex items-center gap-3 pt-2">
            {[
              [SiGithub, profile.socials.github],
              [FaLinkedin, profile.socials.linkedin],
            ].map(([Icon, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 grid place-items-center rounded-xl border border-white/10 hover:bg-white/5 hover:border-cyan-400/60 transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-7 grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-wider text-slate-400">Name</span>
              <input
                name="name"
                required
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition"
                placeholder="Jane Doe"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-wider text-slate-400">Email</span>
              <input
                name="email"
                type="email"
                required
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition"
                placeholder="you@company.com"
              />
            </label>
          </div>
          <label className="grid gap-2">
            <span className="text-xs uppercase tracking-wider text-slate-400">Message</span>
            <textarea
              name="message"
              required
              rows="5"
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition resize-none"
              placeholder="Tell me about your project or role…"
            />
          </label>
          <button type="submit" className="btn-primary w-fit">
            <FiSend /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
