import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { Experience } from './components/Experience'

import './App.css'

// --- 1. Custom Loading Screen ---
function LoadingScreen() {
  const { active, progress } = useProgress()
  return (
    <div className={`loading-screen ${active ? '' : 'hidden'}`}>
      <div className="loading-content">
        <h1 className="loading-logo">VICTOR.</h1>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="progress-text">{Math.floor(progress)}% ENGINE READY</p>
      </div>
    </div>
  )
}

// --- NEW: 2. Scroll Animation Wrapper ---
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // When the element comes into view, set it to visible
        if (entry.isIntersecting) {
          setVisible(true)
          // Stop observing once it's visible so it doesn't animate out when scrolling back up
          if (domRef.current) observer.unobserve(domRef.current)
        }
      })
    }, { threshold: 0.15 }) // Triggers when 15% of the element is visible

    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="app-layout">
      <LoadingScreen />

      {/* 3D Hero Section */}
      <section className="hero-section">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 1, 5], fov: 85 }}
          style={{ background: "radial-gradient(circle at center, #352026 0%, #252525 100%)" }}
        >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
        <div className="hero-ui">
          <h1>VICTOR.</h1>
          <h2>AI & Mobile Engineer</h2>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="content-section">
        <FadeInSection>
          <h2>Selected Work</h2>
        </FadeInSection>

        <div className="project-grid">
          {/* We stagger the delay so they load one after another: 0ms, 200ms, 400ms */}
          <FadeInSection delay={0}>
            <div className="project-card">
              <h3>HerVoice.AI</h3>
              <p>A digital companion architecture focused on women's safety and emotional wellbeing.</p>
              <div className="tech-stack">
                <span>AI</span><span>Mobile</span><span>Architecture</span>
              </div>
              {/* --- UPDATED LINK --- */}
              <a
                href="https://her-voice-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Details →
              </a>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="project-card">
              <h3>Dawa Mashinani</h3>
              <p>An offline-first mobile ecosystem designed to streamline rural healthcare delivery.</p>
              <div className="tech-stack">
                <span>Mobile</span><span>Offline-First</span><span>UX</span>
              </div>
              <a href="#" className="project-link">View Details →</a>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="project-card">
              <h3>Mountain Bridge Investment</h3>
              <p>A high-performance, SEO-optimized web platform for a real estate investment firm.</p>
              <div className="tech-stack">
                <span>Web Development</span><span>SEO</span><span>React</span>
              </div>
              <a href="#" className="project-link">View Details →</a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Expertise & Skills Section */}
      <section id="skills" className="content-section">
        <FadeInSection>
          <h2>Expertise & Skills</h2>
        </FadeInSection>

        <div className="skills-grid">
          <FadeInSection delay={0}>
            <div className="skill-category">
              <h3>Frontend & Design</h3>
              <div className="skill-tags">
                <span>React</span><span>React Three Fiber</span><span>JavaScript (ES6+)</span><span>HTML / CSS</span><span>Adobe Illustrator</span><span>UI/UX</span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={150}>
            <div className="skill-category">
              <h3>Backend & Mobile</h3>
              <div className="skill-tags">
                <span>Python</span><span>Java</span><span>C</span><span>MySQL</span><span>Android Studio</span><span>Solidity</span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="skill-category">
              <h3>AI & Data</h3>
              <div className="skill-tags">
                <span>PyTorch</span><span>Machine Learning</span><span>Big Data Infrastructure</span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={450}>
            <div className="skill-category">
              <h3>Networking & Infrastructure</h3>
              <div className="skill-tags">
                <span>Network Configuration</span><span>Wireshark</span><span>TCP / HTTP Protocols</span><span>Cybersecurity</span><span>IoT</span>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section contact-section">
        <FadeInSection>
          <div className="contact-container">
            <h2 className="contact-title">Let's Build Something Extraordinary.</h2>
            <p className="contact-text">
              Passionate about crafting intuitive user experiences and continuously learning emerging technologies.
              Open to new opportunities in software development, AI, and network configuration. Whether you have a project in mind, a role to fill, or just want to connect, my inbox is always open.
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
        </FadeInSection>

        <footer className="site-footer">
          <p>Designed & Built by Victor Muthomi &copy; {new Date().getFullYear()}</p>
        </footer>
      </section>

    </div>
  )
}