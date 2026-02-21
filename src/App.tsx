import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

import './App.css'

export default function App() {
  return (
    <div className="app-container">

      {/* 2D UI Shell Overlay */}
      <div className="ui-shell">
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
            <Experience />
          </Suspense>
        </Canvas>
      </div>

    </div>
  )
}