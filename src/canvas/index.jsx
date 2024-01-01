import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment,Center } from '@react-three/drei'
import Shirt from './Shirt'
import BackDrop from './BackDrop'
import CamaraRig from './CamaraRig'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5}/>
      <Environment preset='city'/>

      {/* <CamaraRig>
        <BackDrop/> */}
        <Center>
          <Shirt/>
        </Center>
      {/* </CamaraRig> */}
    </Canvas>
  )
}

export default CanvasModel