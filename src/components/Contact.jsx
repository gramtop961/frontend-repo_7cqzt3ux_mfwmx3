import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 ring-1 ring-indigo-100"
          >
            <h3 className="text-2xl font-bold text-gray-900">Let’s build something great</h3>
            <p className="mt-2 text-gray-600">Open to internships and freelance projects in frontend, full‑stack, and cloud.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3"><Mail size={18} /> arpantio15@gmail.com</div>
              <div className="flex items-center gap-3"><Phone size={18} /> +91 75570 81495</div>
              <div className="flex items-center gap-3"><MapPin size={18} /> Kolkata, West Bengal</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Name" />
              <input className="w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" />
            </div>
            <input className="mt-4 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Subject" />
            <textarea rows="5" className="mt-4 w-full rounded-md border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Message" />
            <button type="submit" className="mt-4 w-full rounded-md bg-indigo-600 py-2 font-medium text-white hover:bg-indigo-700">Send</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
