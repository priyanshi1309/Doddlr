import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
const Hoodie = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/hoodie-transformed.glb");

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials["Material.001"].color, snap.color, 0.25, delta));

  return (
    <group position={[0, 0.04, -0.0024]} key="Hoodie">
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.001"]}
        rotation={[1.595, -0.05, 0.012]}
        scale={0.008}
      >
         {snap.isFullTexture && (
          <Decal 
            position={[0, 15, -4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={162}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal
          position={[0, 15, -4]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={12}
            map={logoTexture}
            mapAnisotropy={16}
            depthTest={false}
            depthWrite={true}
        />
        )}
        </mesh>
    </group>
  );
};

export default Hoodie;
