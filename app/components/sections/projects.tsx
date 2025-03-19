function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-tabs">
          <div className="tab active" data-tab="all">
            All Projects
          </div>
          <div className="tab" data-tab="professional">
            Professional
          </div>
          <div className="tab" data-tab="portfolio">
            Portfolio
          </div>
        </div>
        <div className="project-grid">
          <div className="project-card" data-category="professional">
            <img
              src="/api/placeholder/400/200"
              alt="Project 1"
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-title">E-Commerce Platform</h3>
              <p className="project-description">
                A full-stack e-commerce platform with product management,
                shopping cart, and payment processing.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Express</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" className="btn btn-outline">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-card" data-category="portfolio">
            <img
              src="/api/placeholder/400/200"
              alt="Project 2"
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-title">Weather Dashboard</h3>
              <p className="project-description">
                A weather application that displays current weather and
                forecasts for any location.
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">Weather API</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" className="btn btn-outline">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-card" data-category="professional">
            <img
              src="/api/placeholder/400/200"
              alt="Project 3"
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-title">CRM System</h3>
              <p className="project-description">
                A customer relationship management system with contact
                management, task tracking, and analytics.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" className="btn btn-outline">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="project-card" data-category="portfolio">
            <img
              src="/api/placeholder/400/200"
              alt="Project 4"
              className="project-img"
            />
            <div className="project-content">
              <h3 className="project-title">Task Manager</h3>
              <p className="project-description">
                A task management application with drag-and-drop functionality
                and priority settings.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Firebase</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" className="btn btn-outline">
                  Live Demo
                </a>
                <a href="#" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
