import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Float, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'
import './App.css'

function Model(props: any) {
  const { scene } = useGLTF('/models/black_tie.glb')

  scene.traverse((child: any) => {
    if (child.isMesh) {
      child.material.emissive = new THREE.Color("#ff0000")
      child.material.emissiveIntensity = 2
      child.material.toneMapped = false
    }
  })

  return <primitive object={scene} {...props} />
}

function NeonScene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Optional: Keeps the ominous slow rotation
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <Model scale={0.1} />
      </Float>
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

      <Environment preset="night" blur={0.8} />

      {/* 2. Retained the Bloom for the Neon effect */}
      <EffectComposer enableNormalPass={false}>
        <Bloom
          luminanceThreshold={1}
          mipmapBlur
          intensity={1.5}
          radius={0.6}
        />
      </EffectComposer>

      <Suspense fallback={null}>
        <NeonScene />
      </Suspense>

      {/* 3. Added OrbitControls to let you drag/rotate the camera with your mouse */}
      <gridHelper args={[50, 50, '#444444', '#222222']} position={[0, -2, 0]} />
      <OrbitControls makeDefault />
    </Canvas>
  )
}