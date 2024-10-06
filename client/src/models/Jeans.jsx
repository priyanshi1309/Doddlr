import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';


const Jeans = (props)  => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/jeans-transformed.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

 // useFrame((state, delta) => easing.dampC(materials['jeans'].color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
    <group position={[0, -0.3, -0.0024]} {...props} dispose={null} key="jeans">
      <mesh geometry={nodes.Object_4.geometry} material={materials.middle} rotation={[Math.PI / 2, 0, 0]} scale={0.015} >
      {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
            opacity={0}
            depthTest={true} // or false, depending on your needs
            depthWrite={true} // or false, depending on your needs
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={5}
            map={logoTexture}
            mapAnisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
      <mesh geometry={nodes.Object_15.geometry} material={materials.back} rotation={[Math.PI / 2, 0, 0]} scale={0.015} >
     
      </mesh>
    </group>
  )
}

export default Jeans
