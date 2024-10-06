import { Canvas } from '@react-three/fiber'
import { Environment, Center, Loader } from '@react-three/drei';
import PoloShirt from '../models/PoloShirt'
import Shirt from '../models/Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import state from '../store';
import { useSnapshot } from 'valtio';
import { useEffect } from 'react';
import Boots from '../models/Boots';
import ActiveModel from '../models/ActiveModel';
const CanvasModel = () => {
  const snap = useSnapshot(state)
  
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight  color='yellow' intensity={0.9} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          <ActiveModel />

        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel