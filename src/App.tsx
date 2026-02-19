import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage } from '@react-three/drei'

import './App.css'

function Model(props: any) {
  const { scene } = useGLTF('/models/black_tie_1k.glb')

  useEffect(() => {
    if (scene) {
      console.log('Model Scene Loaded:', scene)
      // Log all meshes to verify they are loaded
      scene.traverse((child) => {
        if ((child as any).isMesh) {
          console.log('Found mesh:', child.name)
        }
      })
    }
  }, [scene])

  return (
    <group {...props}>
      <primitive object={scene} />
      {/* Box helper for debugging - FORCE VISIBILITY */}
      <boxHelper args={[scene, 0xffff00]} />
      {/* Small blue cube at 0,0,0 to mark model origin */}
      <mesh>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshBasicMaterial color="blue" wireframe />
      </mesh>
    </group>
  )
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

      {/* Red Cube Sanity Check - Outside Stage so it stays at absolute position */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <gridHelper args={[50, 50, '#444444', '#222222']} position={[0, -2, 0]} />
      <axesHelper args={[5]} />
      <OrbitControls makeDefault />
    </Canvas>
  )
}