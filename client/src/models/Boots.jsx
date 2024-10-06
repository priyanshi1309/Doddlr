import React, { useEffect } from 'react';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
const Boots = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/Boots-transformed.glb');
  const geometry = nodes.Rick_owens_flat_boots.geometry;

  useEffect(() => {
    // Compute vertex normals after the model has been loaded
    if (geometry) {
      geometry.computeVertexNormals();
    }
  });
  
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => {
    if (geometry) {
      geometry.computeVertexNormals();
    }
    easing.dampC(materials.Rick_owens_flat_boots_obj_Obj_Slink_Rick_owens_flat_boots.color, snap.color, 0.25, delta);
  });

  return (
    <group position={[0, 0, 0]} 
    rotation={[0, -4.5, 0]} key="Boots">
      <mesh 
        castShadow
        material-roughness={1}
        dispose={null}
        geometry={geometry}
        material={materials.Rick_owens_flat_boots_obj_Obj_Slink_Rick_owens_flat_boots}
        scale={0.008}
        position={[0, -0.15, 0]}
      >
        {snap.isFullTexture && (
          <Decal 
          position={[0, -0.15, 0]}
          scale={200}
          map={logoTexture}
          depthTest={false}
          depthWrite={true}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[6.5, 22, -20]}
            scale={5}
            map={logoTexture}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
};

export default Boots;

