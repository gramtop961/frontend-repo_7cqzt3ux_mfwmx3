import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">Arpan</a>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-gray-700 hover:text-gray-900">{n.label}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">Hire me</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Arpan Chowdhury. Built with React, Tailwind and Spline.
      </div>
    </footer>
  );
}

export default App;
