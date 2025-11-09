import { motion } from 'framer-motion';
import { Code2, Rocket, Layers } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'JavaScript', icon: Code2 },
    { name: 'React', icon: Rocket },
    { name: 'Node.js', icon: Layers },
    { name: 'Docker', icon: Layers },
    { name: 'Kubernetes', icon: Layers },
    { name: 'AWS', icon: Rocket },
    { name: 'PostgreSQL', icon: Code2 },
    { name: 'MongoDB', icon: Code2 },
  ];

  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 items-start gap-10 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I build interactive web apps and scalable backends. From integrating authentication and APIs to containerized deployments on cloud, I care about performance, accessibility, and clean architecture.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s) => (
                <div key={s.name} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
                  <s.icon size={16} /> {s.name}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <Stat title="Experience" value="3+ internships" note="Frontend, Backend, Cloud" />
            <Stat title="Impact" value="40%+" note="Engagement lift via UX" />
            <Stat title="Deployments" value="Kubernetes" note="EKS, CI/CD" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ title, value, note }) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 p-5 ring-1 ring-indigo-100">
      <div className="text-sm font-medium text-indigo-700">{title}</div>
      <div className="mt-1 text-3xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{note}</div>
    </div>
  );
}
