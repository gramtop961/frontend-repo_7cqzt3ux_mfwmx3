import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    company: 'IEM LABS',
    role: 'Software Engineer Intern',
    location: 'Kolkata, West Bengal',
    period: 'Aug 2024 - Dec 2024',
    points: [
      'Migrated backend architecture from Java to Node.js for improved developer velocity and maintainability.',
    ],
  },
  {
    company: 'Mentorsity',
    role: 'Frontend Web Developer Intern',
    location: 'Remote',
    period: 'Sept 2023 - Jan 2024',
    points: [
      'Revamped website with advanced authentication, improved UX, and increased engagement by 40%.',
    ],
  },
  {
    company: 'IIC IEDC',
    role: 'Part Time Web Developer',
    location: 'Kolkata, West Bengal',
    period: 'Aug 2022 - Dec 2022',
    points: [
      'Performed project analysis, identified issues in engineering designs, and shipped fixes.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Experience</h2>
        <div className="mt-8 space-y-6">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-lg font-semibold text-gray-900">{exp.role}</div>
                  <div className="text-indigo-600">{exp.company}</div>
                </div>
                <div className="text-sm text-gray-600">{exp.location} • {exp.period}</div>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-gray-700">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
