
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model } from './Model'

export const Experience = () => {
    return (
        <>
            <color attach="background" args={['#1a1a1a']} />

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow shadow-mapSize={1024} />

            <Model position={[0, -1, 0]} scale={2} />

            <ContactShadows resolution={1024} scale={10} blur={1} opacity={0.5} far={10} color="#000000" />

            <OrbitControls makeDefault />
            <Environment preset="city" />
        </>
    )
}
