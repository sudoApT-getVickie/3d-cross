import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

import './App.css'

export default function App() {
  return (
    <div className="app-layout">

      {/* 3D Hero Section */}
      <section className="hero-section">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 1, 5], fov: 85 }}
          style={{
            background: "radial-gradient(circle at center, #352026 0%, #252525 100%)"
          }}
        >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>

        {/* Hero UI Overlay */}
        <div className="hero-ui">
          <h1>VICTOR.</h1>
          <h2>muthomi-artfolio</h2>
        </div>
      </section>

      {/* Standard HTML Content Sections */}
      {/* Standard HTML Content Sections */}
      <section id="work" className="content-section">
        <h2>Selected Work</h2>

        <div className="project-grid">
          {/* Project 1 */}
          <div className="project-card">
            <h3>HerVoice.AI</h3>
            <p>A digital companion architecture focused on women's safety and emotional wellbeing.</p>
            <div className="tech-stack">
              <span>AI</span>
              <span>Mobile</span>
              <span>Architecture</span>
            </div>
            <a href="#" className="project-link">View Details →</a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Dawa Mashinani</h3>
            <p>An offline-first mobile ecosystem designed to streamline rural healthcare delivery.</p>
            <div className="tech-stack">
              <span>Mobile</span>
              <span>Offline-First</span>
              <span>UX</span>
            </div>
            <a href="#" className="project-link">View Details →</a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>Mountain Bridge Investment</h3>
            <p>A high-performance, SEO-optimized web platform for a real estate investment firm.</p>
            <div className="tech-stack">
              <span>Web Development</span>
              <span>SEO</span>
              <span>React</span>
            </div>
            <a href="#" className="project-link">View Details →</a>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section">
        <h2>Expertise & Skills</h2>

        <div className="skills-grid">

          {/* Category 1: Frontend & Design */}
          <div className="skill-category">
            <h3>Frontend & Design</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>React Three Fiber</span>
              <span>JavaScript (ES6+)</span>
              <span>HTML / CSS</span>
              <span>Adobe Illustrator</span>
              <span>UI/UX</span>
            </div>
          </div>

          {/* Category 2: Backend & Mobile */}
          <div className="skill-category">
            <h3>Backend & Mobile</h3>
            <div className="skill-tags">
              <span>Python</span>
              <span>Java</span>
              <span>C</span>
              <span>MySQL</span>
              <span>Android Studio</span>
              <span>Solidity</span>
            </div>
          </div>

          {/* Category 3: AI & Data */}
          <div className="skill-category">
            <h3>AI & Data</h3>
            <div className="skill-tags">
              <span>PyTorch</span>
              <span>Machine Learning</span>
              <span>Big Data Infrastructure</span>
            </div>
          </div>

          {/* Category 4: Networking & Infrastructure */}
          <div className="skill-category">
            <h3>Networking & Infrastructure</h3>
            <div className="skill-tags">
              <span>Network Configuration</span>
              <span>Wireshark</span>
              <span>TCP / HTTP Protocols</span>
              <span>Cybersecurity</span>
              <span>IoT</span>
            </div>
          </div>

        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Let's Build Something Extraordinary.</h2>

          <p className="contact-text">
            Passionate about crafting intuitive user experiences and continuously learning emerging technologies, open to new opportunities in software development, AI, and network configuration. Whether you have a project in mind, a role to fill, or just want to connect, my inbox is always open.
          </p>

          <a href="mailto:muthomibernardvictor@gmail.com" className="cta-button big-cta">
            Say Hello
          </a>

          <div className="social-links">
            <a href="mailto:muthomibernardvictor@gmail.com">Email</a>
            <a href="tel:+254710247959">Phone</a>
            <a href="https://www.linkedin.com/in/bernard-victor-muthomi" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <footer className="site-footer">
          <p>Designed & Built by Victor Muthomi &copy; {new Date().getFullYear()}</p>
        </footer>
      </section>

    </div>
  )
}