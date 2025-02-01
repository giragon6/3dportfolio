/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 sleeping_cat.gltf 
Author: Pasu (https://sketchfab.com/psucdeviantart)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sleeping-cat-3f7608e2b6b248bf83db09fb21125c2b
Title: Sleeping Cat
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function SleepingCat(props) {
  const { nodes, materials } = useGLTF('models/sleeping_cat.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[.62,0,-.2]} scale={0.2}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.Material} material-color="black" />
        <mesh geometry={nodes.Object_3.geometry} material={materials['Material.001']} material-color="gray" />
      </group>
    </group>
  )
}

useGLTF.preload('models/sleeping_cat.glb')
