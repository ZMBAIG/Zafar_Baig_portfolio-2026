import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "baigzafar@gmail.com",
    href: "mailto:baigzafar@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: "+31 (6) 2526-2050",
    href: "tel:+31625262050",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: "Rotterdam, Netherlands",
    href: null,
  },
];

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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  // 👉 Replace this with your Formspree form ID
  // Example: https://formspree.io/f/xyzabcde  →  use "xyzabcde"
  const FORMSPREE_ID = "mrppvykq";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-medium mb-2">Get in touch</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Let's Work Together
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-600/10 border border-primary-500/20 flex items-center justify-center text-primary-400 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-200 hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary-400 hover:border-primary-500 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-slate-400 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-slate-400 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-slate-400 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 enabled:cursor-pointer text-white font-medium transition-colors shadow-lg shadow-primary-600/20"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-400 text-sm">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 text-sm">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
