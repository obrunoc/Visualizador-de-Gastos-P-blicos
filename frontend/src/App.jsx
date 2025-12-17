import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Twitter, Facebook } from 'lucide-react';

// ============================================================================
// CONSTANTS
// ============================================================================

const SITE_CONFIG = {
  name: 'Bruno',
  title: 'Web Developer',
  subtitle: 'Front End Developer / WordPress Expert',
  email: 'bruno@socdefense.com',
  location: 'Brazópolis, Minas Gerais, Brasil'
};

const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'My Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' }
];

const SOCIAL_LINKS = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' }
];

const SKILLS_DATA = [
  { name: 'React', level: 60 },
  { name: 'JavaScript', level: 70 },
  { name: 'Node.js', level: 65 },
  { name: 'TypeScript', level: 30 },
  { name: 'Tailwind CSS', level: 60 },
  { name: 'HTML/CSS', level: 85 }
];

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    items: ['React & Next.js', 'Tailwind CSS', 'Responsive Design']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'APIs RESTful', 'MongoDB']
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'Figma']
  }
];

const EXPERIENCE_DATA = [
  {
    company: 'Projeto de própria autoria',
    role: 'Jr Front End Developer',
    period: '2025 - Presente'
  }
];

const GRADIENT_COLORS = {
  primary: 'linear-gradient(90deg, #ec4899, #a855f7, #06b6d4)',
  icon: 'linear-gradient(135deg, #ec4899 0%, #a855f7 100%)'
};

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

const useScrollReveal = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const element = document.getElementById(window.location.hash.slice(1) || 'home');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return isVisible;
};

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return { activeSection, scrollToSection };
};

// ============================================================================
// UI COMPONENTS
// ============================================================================

const Logo = () => (
  <div className="flex items-center gap-4">
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-12 h-12 rounded-lg animate-pulse"
        style={{ background: GRADIENT_COLORS.icon }}
        aria-hidden="true"
      />
      <div
        className="w-12 h-1 rounded-full animate-glow"
        style={{ background: '#06b6d4' }}
        aria-hidden="true"
      />
    </div>

    <div>
      <h1 className="text-2xl font-bold text-white">{SITE_CONFIG.name}</h1>
      <p className="text-sm text-gray-400">{SITE_CONFIG.title}</p>
    </div>
  </div>
);

const NavigationItem = ({ id, label, isActive, onClick }) => (
  <li>
    <button
      onClick={() => onClick(id)}
      className={`
        w-full text-left px-6 py-3 rounded-lg 
        transition-all duration-300
        ${isActive
          ? 'bg-cyan-400/10 text-cyan-400 border-l-4 border-cyan-400 translate-x-1'
          : 'text-gray-400 hover:text-white hover:bg-white/5 hover:translate-x-2'
        }
      `}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </button>
  </li>
);

const SocialLink = ({ icon: Icon, href, label }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="w-5 h-5" aria-hidden="true" />
  </a>
);

const SkillBar = ({ name, level, isVisible, index }) => (
  <div
    className="transition-all duration-1000 hover:scale-105"
    style={{
      transitionDelay: `${index * 100}ms`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
    }}
  >
    <div className="flex justify-between mb-3">
      <span className="text-white font-medium">{name}</span>
      <span className="text-cyan-400 font-bold">{level}%</span>
    </div>
    <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
      <div
        className="h-full rounded-full shadow-lg shadow-pink-500/50 transition-all duration-1000 ease-out"
        style={{
          width: isVisible ? `${level}%` : '0%',
          background: GRADIENT_COLORS.primary
        }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${name} proficiency: ${level}%`}
      />
    </div>
  </div>
);

const SkillCategory = ({ title, items }) => (
  <div className="group hover:scale-105 transition-transform duration-300">
    <h3 className="text-white font-bold text-xl mb-4 group-hover:text-cyan-400 transition-colors">
      {title}
    </h3>
    <ul className="space-y-2 text-gray-400">
      {items.map((item) => (
        <li
          key={item}
          className="group-hover:translate-x-2 transition-transform duration-300"
        >
          • {item}
        </li>
      ))}
    </ul>
  </div>
);

const GradientButton = ({ onClick, children, isVisible }) => (
  <button
    onClick={onClick}
    className={`
      relative px-10 py-5 rounded-full group select-none 
      transition-all duration-1000 delay-500 hover:scale-105 
      bg-[#0a0a0a]
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
    `}
  >
    <span
      className="absolute inset-0 rounded-full p-[2px] -z-10"
      style={{ background: GRADIENT_COLORS.primary }}
    >
      <span className="block w-full h-full bg-[#0a0a0a] rounded-full" />
    </span>

    <span
      className="relative z-10 text-transparent bg-clip-text font-bold text-lg"
      style={{ backgroundImage: GRADIENT_COLORS.primary }}
    >
      {children}
    </span>
  </button>
);

// ============================================================================
// DECORATION COMPONENTS
// ============================================================================

const AnimatedLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="absolute right-0 top-1/4 w-2/3 h-2/3 opacity-60 animate-float"
      viewBox="0 0 800 600"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ec4899" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {[
        { d: "M 700 100 Q 500 200 600 400 T 400 500", gradient: "gradient1", delay: "0s" },
        { d: "M 650 150 Q 450 250 550 450 T 350 550", gradient: "gradient2", delay: "0.3s" },
        { d: "M 600 80 Q 400 180 500 380 T 300 480", gradient: "gradient3", delay: "0.6s" }
      ].map((path, index) => (
        <path
          key={index}
          d={path.d}
          stroke={`url(#${path.gradient})`}
          strokeWidth={2 - index * 0.5}
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="3s"
            begin={path.delay}
            fill="freeze"
          />
        </path>
      ))}
    </svg>

    {/* Floating particles */}
    <div className="absolute top-20 left-1/4 w-2 h-2 bg-pink-500 rounded-full animate-floatSlow blur-sm" aria-hidden="true" />
    <div className="absolute top-40 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-floatMedium blur-sm" aria-hidden="true" />
    <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-floatFast blur-sm" aria-hidden="true" />
  </div>
);

const BackgroundGlow = () => (
  <div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse-slow"
    aria-hidden="true"
  />
);

// ============================================================================
// LAYOUT COMPONENTS
// ============================================================================

const SideMenu = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1a1a] border-r border-white/5 z-50 flex flex-col animate-slideInLeft">
      <header className="p-8 border-b border-white/5">
        <Logo />
      </header>

      <nav className="flex-1 py-8" aria-label="Main navigation">
        <ul className="space-y-2 px-4">
          {NAVIGATION_ITEMS.map(({ id, label }, index) => (
            <div
              key={id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fadeIn"
            >
              <NavigationItem
                id={id}
                label={label}
                isActive={activeSection === id}
                onClick={scrollToSection}
              />
            </div>
          ))}
        </ul>
      </nav>

      <footer className="p-8 border-t border-white/5">
        <div className="flex gap-4 justify-center" role="list">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </div>
      </footer>
    </aside>
  );
};

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection } = useActiveSection();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-[#0a0a0a] select-none overflow-hidden"
    >
      <AnimatedLines />
      <BackgroundGlow />

      <div className="container mx-auto px-12 relative z-10">
        <article className="max-w-3xl">
          <h2
            className={`
              text-7xl md:text-8xl font-bold mb-6 leading-tight 
              transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <span className="text-white inline-block hover:scale-110 transition-transform duration-300">
              Hi,
            </span>
            <br />
            <span className="text-white inline-block">I'm </span>
            <span
              className="text-transparent bg-clip-text inline-block hover:scale-110 transition-transform duration-300 animate-gradient"
              style={{
                backgroundImage: GRADIENT_COLORS.primary,
                backgroundSize: '200% auto'
              }}
            >
              {SITE_CONFIG.name}
            </span>
            <span className="text-white">,</span>
            <br />
            <span className="text-white">web developer</span>
          </h2>

          <p
            className={`
              text-gray-400 text-lg mb-8 tracking-wide 
              transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {SITE_CONFIG.subtitle}
          </p>

          <GradientButton
            onClick={() => scrollToSection('contact')}
            isVisible={isVisible}
          >
            Contact me!
          </GradientButton>
        </article>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none"
    >
      <div className="container mx-auto px-12">
        <article className="max-w-4xl">
          <h2
            className={`
              text-6xl font-bold text-white mb-8 
              transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            `}
          >
            ABOUT
          </h2>

          <div className="space-y-6">
            <p
              className={`
                text-gray-300 text-lg leading-relaxed 
                transition-all duration-1000 delay-200
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
              `}
            >
              Desenvolvedor Front End com foco em criar experiências web incríveis e funcionais.
              Especializado em HTML, JavaScript, React e Tailwind CSS.
            </p>

            <p
              className={`
                text-gray-300 text-lg leading-relaxed 
                transition-all duration-1000 delay-400
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
              `}
            >
              Implemento estratégias eficazes em projetos locais e globais. Minha maior força é a
              consciência de negócios, que me permite otimizar continuamente infraestrutura e aplicações.
            </p>

            <address
              className={`
                flex items-center gap-3 pt-6 text-gray-400 not-italic
                transition-all duration-1000 delay-600 hover:text-cyan-400
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
              `}
            >
              <MapPin className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              <span>{SITE_CONFIG.location}</span>
            </address>

            <div
              className={`
                flex items-center gap-3 text-gray-400 
                transition-all duration-1000 delay-700 hover:text-cyan-400
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
              `}
            >
              <Mail className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none"
    >
      <div className="container mx-auto px-12">
        <article className="max-w-4xl">
          <h2
            className={`
              text-6xl font-bold text-white mb-12 
              transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            MY SKILLS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS_DATA.map((skill, index) => (
              <SkillBar
                key={skill.name}
                {...skill}
                isVisible={isVisible}
                index={index}
              />
            ))}
          </div>

          <div
            className={`
              mt-16 grid md:grid-cols-3 gap-8 
              transition-all duration-1000 delay-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {SKILL_CATEGORIES.map((category) => (
              <SkillCategory key={category.title} {...category} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

const WorkSection = () => (
  <section
    id="work"
    className="min-h-screen flex items-center bg-[#0f0f0f] relative select-none"
  >
    <div className="container mx-auto px-12">
      <article className="max-w-4xl">
        <h2 className="text-6xl font-bold text-white mb-12">WORK</h2>

        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <article
              key={index}
              className="border-l-4 border-cyan-400 pl-8 py-4 hover:border-l-8 hover:translate-x-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
              <p className="text-cyan-400 mb-2">{exp.company}</p>
              <time className="text-gray-400">{exp.period}</time>
            </article>
          ))}
        </div>
      </article>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    id="contact"
    className="min-h-screen flex items-center bg-[#0a0a0a] relative select-none"
  >
    <div className="container mx-auto px-12">
      <article className="max-w-4xl">
        <h2 className="text-6xl font-bold text-white mb-12">CONTACT</h2>

        <p className="text-gray-300 text-xl mb-12">
          Vamos trabalhar juntos? Entre em contato!
        </p>

        <address className="space-y-6 not-italic">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-all duration-300 select-text hover:translate-x-2"
          >
            <Mail className="w-6 h-6 animate-bounce-slow" aria-hidden="true" />
            {SITE_CONFIG.email}
          </a>

          <div className="flex items-center gap-4 text-xl text-white hover:translate-x-2 transition-all duration-300">
            <MapPin className="w-6 h-6 text-cyan-400" aria-hidden="true" />
            {SITE_CONFIG.location}
          </div>
        </address>
      </article>
    </div>
  </section>
);

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================

function App() {
  return (
    <div className="bg-black">
      <SideMenu />

      <main className="ml-64">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </main>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 40px); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -20px); }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4;
          }
          50% {
            box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4;
          }
        }

        @keyframes gradient {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-floatMedium {
          animation: floatMedium 6s ease-in-out infinite;
        }

        .animate-floatFast {
          animation: floatFast 4s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;