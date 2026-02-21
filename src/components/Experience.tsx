import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
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

            {/* 1. Push the model down by changing the middle Y value to -2 */}
            <Model position={[0, -7, 0]} scale={0.006} />

            {/* 2. Push the shadow down to -2 so it perfectly matches the new floor level */}
            <ContactShadows
                position={[0, -6, 0]}
                resolution={1024}
                scale={10}
                blur={2.5}
                opacity={0.8}
                far={10}
                color="#000000"
            />

            <OrbitControls makeDefault enableZoom={false} />
            <Environment preset="city" />
        </>
    )
}