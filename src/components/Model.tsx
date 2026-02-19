
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { scene } = useGLTF('/models/black_tie.glb')
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/black_tie.glb')
