import { PresentationControls, Environment, ContactShadows, Float } from '@react-three/drei'
import { Model } from './Model'

export const Experience = () => {
    return (
        <>
            {/* 1. Increased Ambient Light for better base visibility of the black texture */}
            <ambientLight intensity={1.5} color="#FFE3B3" />

            {/* 2. Stronger Peach Key Light from the front right */}
            <directionalLight
                position={[5, 5, 5]}
                intensity={3.5}
                color="#FFB173"
                castShadow
                shadow-mapSize={1024}
            />

            {/* 3. Coral Fill Light from the front left */}
            <directionalLight
                position={[-5, 5, 2]}
                intensity={2.5}
                color="#FF6766"
            />

            {/* 4. THE FIX: A very bright white Rim Light from behind to separate the tie from the background */}
            <spotLight
                position={[0, 8, -5]}
                intensity={15}
                color="#ffffff"
                angle={0.8}
                penumbra={1}
            />

            {/* 5. A cool Crimson accent light shining up from the floor */}
            <pointLight position={[0, -2, 2]} intensity={8} color="#CA2851" />

            <PresentationControls
                global={false} // Only spins when dragging the model area
                cursor={true} // Changes the mouse to a grab hand
                speed={0.9} // How fast it spins
                zoom={1}
                rotation={[0, 0, 0]}

                polar={[-Math.PI / 99, Math.PI / 55]}  // Vertical spin limits (up/down)
                azimuth={[-Math.PI / 4.4, Math.PI / 4.4]}  // Horizontal spin limits (left/right)
            >
                <Float
                    speed={1} // Animation speed
                    rotationIntensity={0.8} // XYZ rotation intensity
                    floatIntensity={0.8} // Up/down float intensity
                >
                    <Model position={[0, -7, 0]} scale={0.006} />
                </Float>
            </PresentationControls>

            {/* 1. Push the model down by changing the middle Y value to -2 */}


            {/* 2. Push the shadow down to -2 so it perfectly matches the new floor level */}
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