import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Text } from '@react-three/drei'
import { Desk } from './Desk'
import { SleepingCat } from './SleepingCat'



export default function App() {
  return (
    <>
      <Canvas style={{ background: '#a4f4b4' }} camera={{position: [1.7, 1.2, -2.5], near: 0.01}}>
        <Suspense fallback={null}>
            <group>
            <Text rotation-y={2*Math.PI/2} position={[0,2,5]}>
               hi! i'm emme
              </Text>
              <Text rotation-y={2*Math.PI/2.5} position={[0,1,10]}>
              ~*hint: try clicking the computer*~
              </Text>
              <Desk />
              <SleepingCat />
            </group>
          <Environment preset="city" />
        </Suspense>
        </Canvas>
    </>
  )
}
