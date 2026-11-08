import { motion } from "framer-motion";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "15+", label: "Happy Clients" },
  { value: "10+", label: "Open Source" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 font-medium mb-2">Get to know me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-linear-to-br from-primary-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center overflow-hidden">
              <img
                src="/src/assets/cube-logo.png"
                alt="cube-logo"
                className="h-80 w-auto object-contain pb-8"
              />
              {/* <div className="w-48 h-48 rounded-full bg-linear-to-br from-primary-500 to-purple-500 flex items-center justify-center text-6xl font-display font-bold text-white">
                ZB
              </div> */}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary-600/30 blur-2xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-4">
              A passionate developer who loves building things that matter
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a motivated and detail-oriented aspiring Full Stack Developer
              with a solid foundation in modern web technologies and with a
              strong focus on React, Node.js, and modern cloud technologies. I
              enjoy turning complex problems into simple, beautiful, and
              intuitive designs.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new frameworks,
              contributing to open-source, or hiking with my camera. I believe
              great software is built by people who care deeply about both the
              code and the humans who use it.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-dark-800 border border-white/5"
                >
                  <div className="font-display text-2xl font-bold text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
