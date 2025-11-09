import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Newsletter Web App',
    stack: 'JavaScript, React, Tailwind, Mailchimp API',
    desc: 'User-friendly subscription flow with automated personalized emails via Mailchimp.',
    link: '#',
  },
  {
    title: 'Resume GPT',
    stack: 'JavaScript, React, Tailwind, Firebase, OpenAI',
    desc: 'AI-powered resume generation with optimized prompts; +40% engagement.',
    link: '#',
  },
  {
    title: 'Cloud Monitoring App',
    stack: 'Python, Docker, Kubernetes, AWS EKS',
    desc: 'Containerized app deployed to EKS; improved deployment time with managed scaling.',
    link: '#',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    stack: 'Python, React, Kafka, AWS EC2, PostgreSQL',
    desc: 'Live metrics with WebSockets; bar chart of top viewed products and activity stream.',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Projects</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="text-lg font-semibold text-gray-900">{p.title}</div>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-gray-600" />
              </div>
              <div className="mt-1 text-sm text-indigo-600">{p.stack}</div>
              <p className="mt-3 text-gray-600">{p.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
