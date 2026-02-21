import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'

import './App.css'

function Model(props: any) {
  const { scene } = useGLTF('/models/black_tie_1k.glb')
  return <primitive object={scene} {...props} />
}

function NeonScene() {
  return (
    <group>
      <Stage intensity={1} environment="city" adjustCamera>
        <Model />
      </Stage>
    </group>
  )
}

export default function App() {
  return (
    <div className="app-container">

      {/* 2D UI Shell Overlay */}
      <div className="ui-shell">
        <header>
          <div className="logo">Victor.</div>
          <nav>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main className="hero-content">
          <h1>Crafting Modern Digital Experiences</h1>
          <p className="subtitle">
            Specializing in AI integration, mobile applications, and immersive web development to build solutions that scale.
          </p>
          <button className="cta-button">View Projects</button>
        </main>
      </div>

      {/* 3D Canvas Background */}
      <div className="canvas-container">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 1, 5], fov: 85 }}
          style={{
            /* Subtle dark glow utilizing the brand colors */
            background: "radial-gradient(circle at center, #352026 0%, #252525 100%)"
          }}
        >
          <Suspense fallback={null}>
            <NeonScene />
          </Suspense>

          <OrbitControls makeDefault />
        </Canvas>
      </div>

    </div>
  )
}

