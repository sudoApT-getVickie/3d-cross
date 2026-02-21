import { PresentationControls, Environment, ContactShadows, Float } from '@react-three/drei'
import { Model } from './Model'

export const Experience = () => {
    return (
        <>
            {/* Custom Lighting (Kept exactly as you had it) */}
            <ambientLight intensity={1.5} color="#FFE3B3" />
            <directionalLight position={[5, 5, 5]} intensity={3.5} color="#FFB173" castShadow shadow-mapSize={1024} />
            <directionalLight position={[-5, 5, 2]} intensity={2.5} color="#FF6766" />
            <spotLight position={[0, 8, -5]} intensity={15} color="#ffffff" angle={0.8} penumbra={1} />
            <pointLight position={[0, -2, 2]} intensity={8} color="#CA2851" />

            <PresentationControls
                global={false}
                cursor={true}
                speed={0.9}
                zoom={1}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 99, Math.PI / 55]}
                azimuth={[-Math.PI / 4.4, Math.PI / 4.4]}
            >
                <Float
                    speed={1}
                    rotationIntensity={0.8}
                    floatIntensity={0.8}
                >
                    <Model position={[0, -7, 0]} scale={0.006} />
                </Float>
            </PresentationControls>

            {/* Shadow and Env */}
            <ContactShadows
                position={[0, -7, 0]}
                resolution={1024}
                scale={10}
                blur={2.5}
                opacity={0.8}
                far={10}
                color="#000000"
            />

            <Environment preset="city" />
        </>
    )
}
