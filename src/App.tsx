import { useState, useEffect, useRef } from 'react'
import BentoHero from './components/BentoHero'
import './App.css'

// --- 1. Scroll Animation Wrapper ---
function FadeInSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (domRef.current) observer.unobserve(domRef.current)
        }
      })
    }, { threshold: 0.15 })

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
      
      {/* High-Performance Bento Hero Section */}
      <BentoHero />

      {/* Selected Work Section */}
      <section id="work" className="content-section">
        <FadeInSection>
          <h2>Selected Work</h2>
        </FadeInSection>

        <div className="project-grid">
          
          {/* 1. HerVoice.AI */}
          <FadeInSection delay={0}>
            <div className="project-card">
              <h3>HerVoice.AI</h3>
              <p>A digital companion architecture focused on women's safety and emotional wellbeing.</p>
              <div className="tech-stack">
                <span>AI</span><span>Mobile</span><span>Architecture</span>
              </div>
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

          {/* 2. Dawa Mashinani */}
          <FadeInSection delay={200}>
            <div className="project-card">
              <h3>Dawa Mashinani</h3>
              <p>An offline-first mobile ecosystem designed to streamline rural healthcare delivery.</p>
              <div className="tech-stack">
                <span>Mobile</span><span>Offline-First</span><span>UX</span>
              </div>
              <a href="https://dawa-dashinani-infrastructure.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                View Details →
              </a>
            </div>
          </FadeInSection>

          {/* 3. Mountain Bridge Investment */}
          <FadeInSection delay={400}>
            <div className="project-card">
              <h3>Mountain Bridge Investment</h3>
              <p>A high-performance, SEO-optimized web platform for a real estate investment firm.</p>
              <div className="tech-stack">
                <span>Web Development</span><span>SEO</span><span>React</span>
              </div>
              <a href="https://sudoapt-getvickie.github.io/mountain-bridge-site/" className="project-link" target="_blank" rel="noopener noreferrer">
                View Details →
              </a>
            </div>
          </FadeInSection>

          {/* 4. QejaYetu (New Addition) */}
          <FadeInSection delay={600}>
            <div className="project-card">
              <h3>QejaYetu</h3>
              <p>A spatial accommodation platform integrating Google Maps for property discovery and Africa's Talking API for automated SMS communication.</p>
              <div className="tech-stack">
                <span>Next.js</span><span>Google Maps API</span><span>Africa's Talking</span>
              </div>
              <a href="https://qeja-yetu.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                View Live Site →
              </a>
            </div>
          </FadeInSection>

          
          {/* 4. Shamba Shape Up (New Addition) */}
          <FadeInSection delay={800}>
            <div className="project-card">
              <h3>Shamba Shape Up</h3>
              <p>An digital platform connecting local farmers directly with commercial buyers to secure fair market prices for their produce.</p>
              <div className="tech-stack">
                <span>Next.js</span><span>Google Maps API</span><span>Africa's Talking</span>
              </div>
              <a href="https://qeja-yetu.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                View Live Site →
              </a>
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
                <span>React</span><span>JavaScript (ES6+)</span><span>HTML / CSS</span><span>Adobe Illustrator</span><span>UI/UX</span>
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
            
            {/* --- UPDATED: CTA Button Group --- */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <a href="mailto:muthomibernardvictor@gmail.com" className="cta-button big-cta">
                Say Hello
              </a>
              {/* Ensure your file is named exactly Bernard-Muthomi-Resume.pdf in the public folder */}
              <a href="/Bernard-Muthomi-Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button big-cta" style={{ backgroundColor: 'transparent', border: '2px solid #CA2851', color: '#FFE3B3' }}>
                View Resume
              </a>
            </div>

            <div className="social-links" style={{ marginTop: '3rem' }}>
              <a href="mailto:muthomibernardvictor@gmail.com">Email</a>
              <a href="tel:+254710247959">Phone</a>
              <a href="https://www.linkedin.com/in/bernard-victor-muthomi" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/sudoApT-getVickie" target="_blank" rel="noreferrer">GitHub</a>
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