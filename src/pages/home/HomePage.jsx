/* import React from 'react'
import './HomePageCSS.css'
import figure_1 from '../../assets/imgs/dev-3.png';
import row from '../../assets/imgs/row.png';

export const HomePage = () => {
  return (
    <section className='app relative overflow-hidden'>
      <div style={{
        width: '1200px',
        height: '1200px',
        background: "radial-gradient(circle, rgba(126, 217, 87, 0.7) 2.5%, rgba(32, 30, 38, 0) 45%)",
        borderRadius: "50%",
        position: "absolute",
        bottom: "-600px",
        left: "-500px",
      }}></div>
      <div style={{
        width: '900px',
        height: '900px',
        background: "radial-gradient(circle, rgba(126, 217, 87, 0.7) 1.5%, rgba(32, 30, 38, 0) 45%)",
        borderRadius: "50%",
        position: "absolute",
        top: "-570px",
        right: "-470px",
      }}></div>
      <div className='min-h-screen max-xl:pt-28 w-full relative flex max-xl:flex-col items-center justify-between'>
        <div className='realtive min-w-[50%] max-xl:px-10 max-xl:flex max-xl:flex-col max-xl:justify-evenly max-xl:space-y-20'>
          <div className='max-xl:hidden max-xl:h-0'>
            <h2 className='font-linotype-pen text-[#7ed957] text-3xl absolute xl:top-44 xl:right-40'>click me</h2>
            <img className='w-20 max-xl:w-14 animate-jump animate-infinite animate-duration-[2000ms] animate-delay-[1500ms] absolute xl:right-20 xl:top-28 max-xl:right-16' src={row} alt="" />
          </div>
          <div className='xl:absolute xl:bottom-[40%] xl:left-[50%]'>
            <div className='xl:w-[600px] max-xl:w-full '>
              <h6 className='font-gotham text-[#9f9f9f] uppercase animate-fade-left animate-once animate-duration-1000'>HI, I AM MOGUE, I DEVELOPER</h6>
              <h1 className='font-monument-bold text-[#7ed957] uppercase max-xl:text-4xl text-6xl animate-fade-left animate-once animate-duration-1000 animate-delay-[250ms]'>the perfect PROJECT</h1>
              <h6 className='font-gotham text-[#9f9f9f] uppercase animate-fade-left animate-once animate-duration-1000 animate-delay-500'>for your business!</h6>
            </div>
          </div>
          <div className='max-xl:w-full xl:absolute xl:right-10 xl:bottom-10 max-xl:text-right'>
            <h6 className='w-[230px] text-justify font-gotham text-[#9f9f9f] uppercase animate-fade-right animate-once animate-duration-1000 animate-delay-[750ms]'>A programmer who solves problems in the most fun way. :)</h6>
          </div>
        </div>
        <div className='xl:absolute xl:bottom-0 animate-fade-up animate-once animate-duration-1000'>
          <img src={figure_1} alt="" />
        </div>
      </div>
    </section>
  )
}
 */
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code, Palette, Smartphone, Globe, Star, Download, ExternalLink, Menu, X } from 'lucide-react';

export const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efecto de seguimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Datos del portafolio
  const personalInfo = {
    name: "Mynor Alejandro Mogue Godoy",
    title: "Desarrollador Full Stack",
    subtitle: "Creando experiencias digitales increíbles",
    email: "moguemynor@gmail.com",
    phone: "+502 3568-9561",
    location: "Amatitlán, Guatemala, Guatemala",
    github: "https://github.com/mmogue-2021220",
    linkedin: "https://www.linkedin.com/in/mynor-mogue-8b061533b/"
  };

  const skills = [
    { name: "React & Next.js", level: 95, icon: Code, color: "bg-blue-500" },
    { name: "Node.js & Express", level: 90, icon: Globe, color: "bg-green-500" },
    { name: "UI/UX Design", level: 85, icon: Palette, color: "bg-purple-500" },
    { name: "React Native", level: 80, icon: Smartphone, color: "bg-orange-500" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Moderno",
      description: "Plataforma de comercio electrónico con React, Node.js y Stripe. Incluye panel de administración y analytics en tiempo real.",
      image: "/api/placeholder/400/250",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "App de Fitness",
      description: "Aplicación móvil para seguimiento de ejercicios con React Native. Integración con dispositivos wearables.",
      image: "/api/placeholder/400/250",
      tech: ["React Native", "Firebase", "Redux"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Panel de control con visualizaciones interactivas usando D3.js y React. Procesamiento de big data.",
      image: "/api/placeholder/400/250",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const experience = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Presente",
      description: "Liderazgo de equipo de 5 desarrolladores. Arquitectura de microservicios y optimización de rendimiento."
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description: "Desarrollo de interfaces de usuario innovadoras. Implementación de PWAs y optimización SEO."
    }
  ];

  // Componente de navegación
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {section === 'home' ? 'Inicio' : 
                 section === 'about' ? 'Acerca' :
                 section === 'skills' ? 'Habilidades' :
                 section === 'projects' ? 'Proyectos' :
                 section === 'experience' ? 'Experiencia' : 'Contacto'}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 capitalize transition-all duration-300 hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {section === 'home' ? 'Inicio' : 
                 section === 'about' ? 'Acerca' :
                 section === 'skills' ? 'Habilidades' :
                 section === 'projects' ? 'Proyectos' :
                 section === 'experience' ? 'Experiencia' : 'Contacto'}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  // Sección Home
  const HomeSection = () => (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Elementos decorativos animados */}
      {<div className="absolute inset-0">
        <div 
          className="absolute w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-200 rounded-full opacity-10 animate-bounce"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <img
            src="/api/placeholder/200/200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 shadow-2xl ring-4 ring-white transform transition-transform duration-300 hover:scale-110"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 font-light">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            {personalInfo.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Ver Proyectos
            </button>
            <button 
              onClick={() => setActiveSection('contact')}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transform transition-all duration-300 hover:scale-105"
            >
              Contactar
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  );

  // Sección About
  const AboutSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Acerca de Mí</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/api/placeholder/500/400"
              alt="About me"
              className="rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Desarrollador apasionado por crear soluciones innovadoras
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Con más de 5 años de experiencia en desarrollo web y móvil, me especializo en crear 
              aplicaciones modernas y escalables. Mi pasión por la tecnología me impulsa a mantenerme 
              actualizado con las últimas tendencias y mejores prácticas.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              He trabajado con startups y empresas establecidas, ayudándolas a transformar sus ideas 
              en productos digitales exitosos. Mi enfoque combina creatividad técnica con una sólida 
              comprensión de las necesidades del negocio.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                <Download size={20} />
                Descargar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Sección Skills
  const SkillsSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${skill.color} text-white mr-4`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                  </div>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Avanzado
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div 
                      style={{ width: `${skill.level}%` }} 
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${skill.color} transition-all duration-1000 ease-out`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );

  // Sección Projects
  const ProjectsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
              {project.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 text-sm font-semibold">
                  <Star size={16} className="inline mr-1" />
                  Destacado
                </div>
              )}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Código</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Ver Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Sección Experience
  const ExperienceSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Experiencia</h2>
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-300 last:hidden"></div>
              <div className="bg-white p-6 rounded-xl shadow-lg ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                  <span className="text-blue-600 font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg text-gray-600 mb-3">{exp.company}</h4>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Sección Contact
  const ContactSection = () => (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">¡Trabajemos Juntos!</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-300" size={24} />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-300" size={24} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-300" size={24} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a href={personalInfo.github} className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href={personalInfo.linkedin} className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 text-white border border-white border-opacity-30 focus:outline-none focus:border-opacity-100"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 text-white border border-white border-opacity-30 focus:outline-none focus:border-opacity-100"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Tu mensaje"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 text-white border border-white border-opacity-30 focus:outline-none focus:border-opacity-100 resize-none"
                />
              </div>
              <button
                className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transform transition-all duration-300 hover:scale-105"
                onClick={() => alert('¡Mensaje enviado! (Demo)')}
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Render de secciones
  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HomeSection />;
      case 'about': return <AboutSection />;
      case 'skills': return <SkillsSection />;
      case 'projects': return <ProjectsSection />;
      case 'experience': return <ExperienceSection />;
      case 'contact': return <ContactSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cursor personalizado */}
      <div 
        className="fixed w-6 h-6 bg-blue-500 bg-opacity-30 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      />
      
      <Navigation />
      <main className="pt-20">
        {renderSection()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2024 {personalInfo.name}. Todos los derechos reservados.</p>
        <p className="text-gray-400 mt-2">Hecho con ❤️ usando React + Vite</p>
      </footer>

      {/* Estilos CSS personalizados */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
