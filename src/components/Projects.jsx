import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Nova Dashboard",
    description:
      "A modern analytics dashboard with real-time charts, dark mode, and role-based access control. Built for SaaS teams.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Shopwise E-commerce",
    description:
      "Full-stack e-commerce platform with cart, payments (Stripe), inventory management, and admin panel.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: null,
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "TaskFlow API",
    description:
      "RESTful task management API with JWT auth, rate limiting, and comprehensive documentation.",
    tags: ["Express", "MongoDB", "JWT", "Swagger"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description:
      "CLI tool that generates beautiful portfolio sites from a simple JSON config. Supports themes and deployment.",
    tags: ["Node.js", "React", "Vite", "CLI"],
    image: null,
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-medium mb-2">My recent work</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl bg-dark-800 border border-white/5 overflow-hidden hover:border-primary-500/30 transition-all"
            >
              {/* Image / placeholder */}
              {/* <div className="aspect-video bg-linear-to-br from-dark-700 to-dark-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <HiCode
                    size={48}
                    className="text-slate-600 group-hover:text-primary-500/50 transition-colors"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-dark-800 via-transparent to-transparent" />
              </div> */}

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    <HiExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    <FaGithub size={16} />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
