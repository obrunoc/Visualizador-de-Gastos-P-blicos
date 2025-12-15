import { useState } from 'react';
import { Code, Briefcase, Award, Mail, Github, Linkedin, ExternalLink, MapPin, Phone } from 'lucide-react';

function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 select-none">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex gap-8">
          <button onClick={() => setActiveSection('home')} className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
            Home
          </button>
          <button onClick={() => setActiveSection('about')} className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
            About
          </button>
          <button onClick={() => setActiveSection('resume')} className={`text-sm font-medium transition-colors ${activeSection === 'resume' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
            Resume
          </button>
          <button onClick={() => setActiveSection('portfolio')} className={`text-sm font-medium transition-colors ${activeSection === 'portfolio' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
            Portfolio
          </button>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Phone className="w-4 h-4" />
          <span className="text-sm">CONTATO</span>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-center select-none">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAi...')] opacity-20"></div>

      <div className="relative z-10">
        <h1 className="text-7xl font-bold mb-2 text-white leading-tight">
          BRUNO<br />CARVALHO
        </h1>
        <p className="text-gray-400 text-lg mb-8 tracking-wide">
          Desenvolvedor Front End
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium">
            Resume
          </button>
          <button className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all font-medium">
            Portfolio
          </button>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-center px-6 select-none">
      <div className="max-w-2xl">
        <h2 className="text-5xl font-bold text-white mb-4">SOBRE</h2>
        <p className="text-cyan-400 mb-8">bruno@socdefense.com</p>
        <p className="text-gray-400 leading-relaxed mb-6">
          Desenvolvedor Front End, foco principal de estudo; HTML, JavaScript, Tailwind e tecnologias web modernas.
        </p>
        <p className="text-gray-400 leading-relaxed mb-6">
          Implemento estratégias eficazes em projetos locais e globais. Minha maior força é a consciência de negócios, que me permite otimizar continuamente infraestrutura e aplicações.
        </p>
        <div className="flex justify-center items-center gap-2 text-gray-400 text-sm mt-8">
          <MapPin className="w-4 h-4" />
          <span>Brazópolis, Minas Gerais, Brasil</span>
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  const skills = [
    { name: 'React', level: 60 },
    { name: 'Node.js', level: 65 },
    { name: 'JavaScript', level: 70 },
    { name: 'TypeScript', level: 30 },
    { name: 'Tailwind CSS', level: 60 }
  ];
  
  const experience = [
    {
      company: 'Projeto de própria autoria',
      role: 'Jr Front End Developer',
      period: '2025 - Presente'
    },
  ];
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative select-none">
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="grid grid-cols-3 gap-16">
          {/* Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">SOFTWARE SKILLS</h3>
            <div className="space-y-6 text-left">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400 text-sm">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        background: 'linear-gradient(to right, #06b6d4, #3b82f6)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 mt-12">LINGUAGENS</h3>
            <div className="space-y-4 text-left">
              <div className="flex justify-between">
                <span className="text-gray-400">Português</span>
                <span className="text-gray-500">Nativo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Inglês</span>
                <span className="text-gray-500">Intermediário</span>
              </div>
            </div>
          </div>
          
          {/* Experience */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">EXPERIÊNCIA</h3>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i}>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-white/5">
                    <h4 className="text-white font-semibold mb-1">{exp.company}</h4>
                    <p className="text-cyan-400 text-sm mb-1">{exp.role}</p>
                    <p className="text-gray-500 text-xs">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* What I Can Do */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">O QUE POSSO FAZER?</h3>
            <div className="space-y-4 mb-12 text-left">
              <p className="text-gray-400 text-sm">• Desenvolvimento Frontend</p>
              <p className="text-gray-400 text-sm">• Desenvolvimento Backend</p>
              <p className="text-gray-400 text-sm">• UI/UX Design</p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">DESIGN SKILLS</h3>
            <div className="space-y-4 mb-12 text-left">
              <p className="text-gray-400 text-sm">• Criatividade</p>
              <p className="text-gray-400 text-sm">• Tipografia & Layout</p>
              <p className="text-gray-400 text-sm">• Teoria das Cores</p>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">HOBBIES & INTERESTS</h3>
            <div className="space-y-4 text-left">
              <p className="text-gray-400 text-sm">• Tecnologia</p>
              <p className="text-gray-400 text-sm">• Open Source</p>
              <p className="text-gray-400 text-sm">• Cyber Security</p> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
    </div>
  );
}

export default App