
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { scene } = useGLTF('/models/black_tie_1k.glb')
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/black_tie_1k.glb')
