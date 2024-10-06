import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.2}
      scale={8}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.2]}
      color='#766d6d'
    >
      <RandomizedLight 
        amount={2}
        radius={150}
        intensity={0.35}
        ambient={0.25}
        position={[0, 0, -3]}
      />
      <RandomizedLight 
        amount={2}
        radius={8}
        intensity={0.25}
        ambient={0.15}
        position={[-15, 2, -9]}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop