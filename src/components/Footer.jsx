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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} Zafar Baig. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-primary-400 transition-colors "
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
