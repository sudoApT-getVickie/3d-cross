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
    <Canvas dpr={[1, 2]} camera={{ position: [0, 1, 5], fov: 45 }}
      style={{
        position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh",
        background: "radial-gradient(circle at center, #0c0b0bff 0%, #050505 100%)"
      }}>

      <Suspense fallback={null}>
        <NeonScene />
      </Suspense>

      <OrbitControls makeDefault />
    </Canvas>
  )
}