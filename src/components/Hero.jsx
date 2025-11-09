import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-500/20">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Open to Software & Frontend Roles
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Arpan Chowdhury
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Software Engineer focused on modern web experiences, scalable systems, and delightful UI. I blend React, Node.js, and cloud-native tooling to ship fast, accessible products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-gray-700">
            <a href="mailto:arpantio15@gmail.com" className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-50">
              <Mail size={16} /> arpantio15@gmail.com
            </a>
            <a href="tel:+917557081495" className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-50">
              <Phone size={16} /> +91 75570 81495
            </a>
            <div className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm">
              <MapPin size={16} /> Kolkata, West Bengal
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white shadow hover:bg-indigo-700">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50">
              Contact
            </a>
            <div className="ml-auto flex items-center gap-2">
              <a aria-label="GitHub" href="#" className="rounded-md bg-white p-2 ring-1 ring-gray-200 hover:bg-gray-50"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="rounded-md bg-white p-2 ring-1 ring-gray-200 hover:bg-gray-50"><Linkedin size={18} /></a>
              <a aria-label="Portfolio" href="#" className="rounded-md bg-white p-2 ring-1 ring-gray-200 hover:bg-gray-50"><Globe size={18} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
