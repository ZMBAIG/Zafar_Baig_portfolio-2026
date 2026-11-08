import { motion } from "framer-motion";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com/ZMBAIG", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/zmbaig",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com/zmbaig", label: "Twitter" },
  {
    icon: FaInstagram,
    href: "https://instagram.com/64zmb",
    label: "Instagram",
  },
  { icon: FaYoutube, href: "https://youtube.com/zmbaig", label: "YouTube" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-75 h-75 bg-purple-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-white font-['Mrs_Saint_Delafield'] text-10xl">
              Zafar Baig
            </span>
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text mb-6">
            Full-Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
            I craft clean, scalable web applications with modern technologies.
            Passionate about great UX, performance, and turning ideas into
            delightful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-medium transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40"
            >
              View My Work
            </a>
            <a
              href="/src/assets/Zafar-Resume-FSD-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border border-slate-600 hover:border-primary-500 text-slate-300 hover:text-white font-medium transition-all flex items-center gap-2"
            >
              <HiDownload size={18} />
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-500 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-primary-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <HiArrowDown size={28} />
        </motion.a>
      </div>
    </section>
  );
}
