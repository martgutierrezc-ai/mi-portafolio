import { Navbar } from './components/organisms/Navbar';
import { Footer } from './components/organisms/Footer';
import { Title } from './components/atoms/Title';
import { Avatar } from './components/atoms/Avatar';
import { ProjectCard } from './components/molecules/ProjectCard';
import { ContactForm } from './components/molecules/ContactForm';
import './App.css';

function App() {
  const projects = [
    {
      id: 1,
      title: "Repositorio Principal en GitHub",
      description: "Explora mis repositorios públicos, proyectos de software, microservicios en Spring Boot y desarrollos académicos.",
      link: "https://github.com/martgutierrezc-ai"
    }
  ];

  return (
    <div className="app-container">
      {/* Navbar principal */}
      <Navbar />

      <main className="content">
        {/* 1. Sección Sobre Mí con Nombre y Avatar */}
        <section id="about" className="section">
          <Title text="Sobre Mí" level={1} />
          <div className="about-content">
            <Avatar 
              src="https://cdn.pfps.gg/pfps/8863-minato-avatar.png" 
              alt="Avatar de Martín Gutiérrez"
              initials="MG" 
            />
            <div className="about-text">
              <h2 className="user-name">Martín Gutiérrez</h2>
              <p>
                Soy estudiante de DuocUC Maipú actualmente cursando la carrera de Analista Programador. 
                Me enfoco en el desarrollo de aplicaciones y soluciones web, la escritura de código limpio 
                y la exploración de nuevas tecnologías para la resolución eficiente de problemas.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Experiencia Laboral */}
        <section id="experience" className="section">
          <Title text="Experiencia Laboral" level={2} />
          <p>
            Actualmente enfocado a tiempo completo en mi formación académica y en el desarrollo de proyectos prácticos de software.
          </p>
        </section>

        {/* 3. Estudios */}
        <section id="education" className="section">
          <Title text="Estudios" level={2} />
          <div className="education-timeline">
            <div className="edu-card">
              <span className="edu-badge">Educación Superior</span>
              <h3>Analista Programador</h3>
              <p><strong>Institución:</strong> DuocUC Maipú (En curso)</p>
            </div>
            <div className="edu-card">
              <span className="edu-badge">Educación Media</span>
              <h3>Enseñanza Media Completada</h3>
              <p><strong>Colegio:</strong> Hermanos Carrera</p>
            </div>
          </div>
        </section>

        {/* 4. Desarrollos y Proyectos con Previsualización de GitHub */}
        <section id="projects" className="section">
          <Title text="Desarrollos y Proyectos" level={2} />
          
          {/* Card de Previsualización Visual de GitHub */}
          <div className="github-preview-card">
            <div className="github-preview-header">
              <img 
                src="https://github.com/martgutierrezc-ai.png" 
                alt="GitHub Profile Avatar" 
                className="github-preview-avatar"
              />
              <div>
                <h3 className="github-preview-title">@martgutierrezc-ai</h3>
                <span className="github-preview-subtitle">Perfil Oficial de GitHub</span>
              </div>
            </div>
            
            {/* Banner/Badge con las estadísticas de GitHub */}
            <div className="github-stats-container">
              <a href="https://github.com/martgutierrezc-ai" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=martgutierrezc-ai&show_icons=true&theme=nord&hide_border=true" 
                  alt="Estadísticas de GitHub" 
                  className="github-stats-img"
                />
              </a>
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((proj) => (
              <ProjectCard 
                key={proj.id} 
                title={proj.title} 
                description={proj.description} 
                link={proj.link} 
              />
            ))}
          </div>
        </section>

        {/* 5. Contacto */}
        <section id="contact" className="section">
          <Title text="Contacto" level={2} />
          <p>
            Puedes revisar mi perfil en <a href="https://github.com/martgutierrezc-ai" target="_blank" rel="noopener noreferrer">GitHub</a> o enviarme un mensaje directo:
          </p>
          <ContactForm />
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;