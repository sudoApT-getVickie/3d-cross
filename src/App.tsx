import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, ScrollControls, useScroll, Float, Sparkles, Scroll } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing' // NEW: For the Neon Glow
import * as THREE from 'three'
import './App.css'

// 1. Update the Model Path
function Model(props) {
  // Make sure your file in /public is named 'cross.glb'
  const { scene } = useGLTF('./cross.glb')

  // Optional: Force the material to be emissive if the model isn't already
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.emissive = new THREE.Color("#ff0000") // Red Glow
      child.material.emissiveIntensity = 2
      child.material.toneMapped = false // Critical for bright neon
    }
  })

  return <primitive object={scene} {...props} />
}

function NeonScene() {
  const scroll = useScroll()
  const groupRef = useRef()

  // 2. New Background Colors (Deep Red to Black)
  const bgStart = new THREE.Color('#1a0000') // Dark Blood Red
  const bgEnd = new THREE.Color('#000000')   // Pitch Black

  useFrame((state, delta) => {
    // 3. New Movement Logic
    if (groupRef.current) {
      // Constant slow rotation (ominous feel)
      groupRef.current.rotation.y += delta * 0.2

      // Scroll moves the object closer/further instead of just rotating
      // It starts at z=0 and moves to z=2 based on scroll
      groupRef.current.position.z = scroll.offset * 2
    }

    // Background Color Lerp
    if (state.scene.background instanceof THREE.Color) {
      state.scene.background.lerpColors(bgStart, bgEnd, scroll.offset)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Increased Float intensity for "levitation" effect */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <Model scale={0.5} /> {/* Adjust scale as needed */}
      </Float>
    </group>
  )
}

export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }} style={{ position: "absolute" }}>
      <color attach="background" args={['#1a0000']} />

      {/* Dimmer Environment to let the Neon pop */}
      <Environment preset="night" blur={0.8} />

      {/* 4. The Glow Effect (Bloom) */}
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={1} // Only very bright things glow
          mipmapBlur
          intensity={1.5} // Strength of the glow
          radius={0.6}
        />
      </EffectComposer>

      {/* Red Sparkles */}
      <Sparkles count={80} scale={10} size={4} speed={0.2} opacity={0.5} color="#ff3333" />

      <ScrollControls pages={3} damping={0.2}>
        <NeonScene />

        {/* HTML Text Overlay */}
        <Scroll html style={{ width: '100%' }}>
          <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '10vw', color: '#ff0000', textShadow: '0 0 20px #ff0000' }}>
              SACRIFICE
            </h1>
          </section>

          <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontFamily: '"Oswald", sans-serif', fontSize: '10vw', color: 'transparent', WebkitTextStroke: '2px #fff' }}>
              REDEMPTION
            </h1>
          </section>
        </Scroll>
      </ScrollControls>
    </Canvas>
  )
}