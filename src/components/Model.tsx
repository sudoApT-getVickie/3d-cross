
import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { scene } = useGLTF('/models/speakerman_cross_effect.glb')
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/models/speakerman_cross_effect.glb')
